import { Component, OnInit } from '@angular/core';
import { AppStoreService } from './app-store.service';
import {App} from 'ngx-landscape-core';

@Component({
  selector: 'lib-app-store',
  templateUrl: './app-store.component.html',
  styleUrls: ['./app-store.component.scss']
})
export class AppStoreComponent implements OnInit {

  apps: App[];
  filteredApps: App[];
  filterValue = '';

  constructor(private appStoreService: AppStoreService) {
    this.appStoreService.getAvailableApps().subscribe((apps: App[]) => {
      this.apps = apps;
      this.filteredApps = this.apps;
    });
  }

  ngOnInit() {
  }

  subscribeApp(app: App) {
    this.appStoreService.subscribeApp(app.id).subscribe(() => {
      this.refreshApp(app.id);
    });
  }

  unsubscribeApp(app: App) {
    this.appStoreService.unsubscribeApp(app.id).subscribe(() => {
      this.refreshApp(app.id);
    });
  }

  clearFilter() {
    this.filterValue = '';
    this.filteredApps = this.apps;
  }

  onFilterInput(value: string) {
    this.filterValue = value;
    this.searchBy(this.filterValue);
  }

  private searchBy(value: string) {
    this.filteredApps = this.apps.filter(function(app) {
      return app.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        app.type.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  private refreshApp(appId: string) {
    this.appStoreService.getAvailableAppById(appId).subscribe((newApp: App) => {
      const appIndex = this.apps.findIndex(oldApp => oldApp.id === appId);
      this.apps[appIndex] = newApp;
      if (this.filterValue.length > 0) {
        this.searchBy(this.filterValue);
      }
    });
  }

}
