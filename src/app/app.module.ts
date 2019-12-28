import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLandscapeCoreModule} from 'ngx-landscape-core';
import {NgxLandscapeAdminModule} from 'ngx-landscape-admin';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {SampleAppModule} from './sample-app/sample-app.module';
import {SampleApp} from './sample-app/sample-app';
import {SampleAppComponent} from './sample-app/main/sample-app.component';
import {SampleAppDashboardComponent} from './sample-app/dashboard/sample-app-dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SampleAppModule,
    NgxLandscapeCoreModule.withConfig({
      landscapeApi: environment.landscapeApi,
      appTypes: [
        {
          name: 'SampleApp',
          route: 'sample-app',
          appClazz: SampleApp,
          mainComponent: SampleAppComponent,
          dashboardComponent: SampleAppDashboardComponent
        }
      ]
    }),
    NgxLandscapeAdminModule.withConfig({
      landscapeApi: environment.landscapeApi,
      appTypes: [
        {
          name: 'SampleApp',
          appClazz: SampleApp
        }
      ]
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
