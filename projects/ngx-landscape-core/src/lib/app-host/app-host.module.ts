import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MainHostComponent } from './main-host/main-host.component';
import { DashboardHostComponent } from './dashboard-host/dashboard-host.component';
import { DashboardHostDirective } from './dashboard-host/dashboard-host.directive';
import {BaseAppModule} from '../base-app/base-app.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BaseAppModule
  ],
  declarations: [
    MainHostComponent,
    DashboardHostComponent,
    DashboardHostDirective,
  ],
  exports: [
    MainHostComponent,
    DashboardHostComponent,
    DashboardHostDirective
  ]
})
export class AppHostModule { }
