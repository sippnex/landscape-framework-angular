import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, PageEvent} from '@angular/material';
import {AppAdminService} from '../app-admin.service';
import {Router} from '@angular/router';
import {App, RestApiPage, RestApiPagingConfig} from 'ngx-landscape-core';

@Component({
  selector: 'lib-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'icon', 'controls'];
  dataSource: any;
  pagingConfig: RestApiPagingConfig;
  filterValue = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private appAdminService: AppAdminService) {
  }

  ngOnInit() {
    this.pagingConfig = this.appAdminService.getPagingConfig();
    this.getApps(this.pagingConfig);
  }

  loadPage(pageEvent: PageEvent) {
    this.pagingConfig.page = pageEvent.pageIndex;
    this.pagingConfig.size = pageEvent.pageSize;
    this.getApps(this.pagingConfig);
  }

  getApps(pagingConfig: RestApiPagingConfig) {
    this.appAdminService.getAllApps(pagingConfig).subscribe((appPage: RestApiPage<App>) => {
      this.dataSource = appPage.content;
      this.updatePaginator(appPage.size, appPage.page, appPage.length);
    });
  }

  updatePaginator(pageSize: number, pageIndex: number, length: number) {
    this.paginator.pageSize = pageSize;
    this.paginator.pageIndex = pageIndex;
    this.paginator.length = length;
    if (this.dataSource != null) {
      this.dataSource.paginator = this.paginator;
    }
  }

  clearFilter() {
    this.filterValue = '';
    this.onFilterInput('');
  }

  onFilterInput(value: string) {
    this.filterValue = value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editApp(appId: string) {
    this.router.navigateByUrl('/admin/app-item/' + appId);
  }

  createApp() {
    this.router.navigateByUrl('/admin/app-item');
  }

}
