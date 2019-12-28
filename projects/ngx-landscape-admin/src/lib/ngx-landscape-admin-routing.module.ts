import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppListComponent} from './app-admin/app-list/app-list.component';
import {AppItemComponent} from './app-admin/app-item/app-item.component';
import {NgxLandscapeAdminComponent} from './ngx-landscape-admin.component';

const adminRoutes: any = [
  {
    path: 'admin',
    component: NgxLandscapeAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'app-list',
        component: AppListComponent
      },
      {
        path: 'app-item/:id',
        component: AppItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class NgxLandscapeAdminRoutingModule { }
