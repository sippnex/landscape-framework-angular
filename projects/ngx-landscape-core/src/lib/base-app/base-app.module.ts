import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseAppComponent} from './main/base-app.component';
import {BaseAppDashboardComponent} from './dashboard/base-app-dashboard.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    BaseAppComponent,
    BaseAppDashboardComponent
  ],
  exports: [
    BaseAppComponent,
    BaseAppDashboardComponent
  ],
  entryComponents: [
    BaseAppComponent,
    BaseAppDashboardComponent
  ]
})
export class BaseAppModule { }
