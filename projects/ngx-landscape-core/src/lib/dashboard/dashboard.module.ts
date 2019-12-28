import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material';
import {AppHostModule} from '../app-host/app-host.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    GridsterModule,
    MatButtonModule,
    AppHostModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
