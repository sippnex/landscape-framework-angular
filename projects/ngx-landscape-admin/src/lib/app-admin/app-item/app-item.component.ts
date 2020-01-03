import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppRegistryService, AppType} from 'ngx-landscape-core';

@Component({
  selector: 'lib-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent implements OnInit {

  firstStepEnabled = false;
  appTypes: AppType[] = [];

  constructor(private route: ActivatedRoute, private appRegistryService: AppRegistryService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const appId = params['id'];
      if (appId) {
         // TODO: fetch app from API
      } else  {
        this.firstStepEnabled = true;
        this.appTypes = this.appRegistryService.getAllAppTypes();
      }
    });
  }

}
