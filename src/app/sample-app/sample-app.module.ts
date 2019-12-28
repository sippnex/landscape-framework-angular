import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleAppComponent} from './main/sample-app.component';
import { SampleAppDashboardComponent } from './dashboard/sample-app-dashboard.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    SampleAppComponent,
    SampleAppDashboardComponent
  ],
  exports: [
    SampleAppComponent,
    SampleAppDashboardComponent
  ],
  entryComponents: [
    SampleAppComponent,
    SampleAppDashboardComponent
  ]
})
export class SampleAppModule { }
