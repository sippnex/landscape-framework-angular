import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import {DashboardService} from './dashboard.service';
import {Router} from '@angular/router';
import {AppSubscription} from './app-subscription';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<AppSubscription>;

  constructor(private router: Router, private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: (item, itemComponent) => this.itemChanged(<AppSubscription> item, itemComponent),
      minRows: 3,
      minCols: 4,
      maxCols: 4,
      margin: 32,
      fixedRowHeight: 96,
      defaultItemCols: 1,
      defaultItemRows: 2,
      gridType: 'verticalFixed',
      draggable: {
        enabled: true,
        ignoreContentClass: 'not-draggable'
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboardService.getAllAppSubscriptions().subscribe((appSubscriptions: AppSubscription[]) => {
      this.dashboard = appSubscriptions;
    }, error => {
      console.error('Dashboard Component calls error', error);
    });

  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  itemChanged(item: AppSubscription, itemComponent) {
    this.dashboardService.updateAppSubscriptionPosition(item.app.id, item.x, item.y, item.rows, item.cols);
  }

}
