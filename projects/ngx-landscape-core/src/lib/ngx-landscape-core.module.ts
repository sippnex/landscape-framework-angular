import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {CoreComponent} from './core.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {CoreRoutingModule} from './core-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {LayoutModule} from './layout/layout.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomHttpInterceptor} from './shared/http/custom-http.interceptor';
import {ThemeService} from './shared/theme/theme.service';
import {AppStoreModule} from './app-store/app-store.module';
import {AppStoreService} from './app-store/app-store.service';
import {DashboardService} from './dashboard/dashboard.service';
import {BaseAppService} from './base-app/base-app.service';
import {AppHostModule} from './app-host/app-host.module';
import {BaseAppComponent} from './base-app/main/base-app.component';
import {BaseAppDashboardComponent} from './base-app/dashboard/base-app-dashboard.component';
import {RouterBufferModule} from './router-buffer/router-buffer.module';
import {AppRegistryService} from './app-registry.service';
import {App} from './app-host/app.interface';

export interface AppType {
  name: string;
  route: string;
  appClazz: Type<App>;
  mainComponent?: Type<BaseAppComponent>;
  dashboardComponent?: Type<BaseAppDashboardComponent>;
}

export interface LandscapeConfig {
  api?: string;
  appTypes?: AppType[];
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CoreRoutingModule,
    LayoutModule,
    AppHostModule,
    DashboardModule,
    AppStoreModule,
    RouterBufferModule
  ],
  declarations: [
    CoreComponent
  ],
  exports: [
    CoreComponent
  ]
})
export class NgxLandscapeCoreModule {

  static withConfig(lsConfig: LandscapeConfig): ModuleWithProviders {

    // Api validation
    if (!lsConfig.api) {
      lsConfig.api = '';
    }

    // App Types validation
    if (!lsConfig.appTypes) {
      lsConfig.appTypes = [];
    } else {
      lsConfig.appTypes.forEach(appType => {
        if (!appType.mainComponent) { appType.mainComponent = BaseAppComponent; }
        if (!appType.dashboardComponent) { appType.dashboardComponent = BaseAppDashboardComponent; }
      });
    }

    return {
      ngModule: NgxLandscapeCoreModule,
      providers: [
        AppRegistryService,
        ThemeService,
        DashboardService,
        AppStoreService,
        BaseAppService,
        { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
        { provide: 'lsConfig', useValue: lsConfig }
      ]
    };
  }
}
