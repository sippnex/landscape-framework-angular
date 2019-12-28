import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { NgxLandscapeAdminComponent } from './ngx-landscape-admin.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgxLandscapeAdminRoutingModule} from './ngx-landscape-admin-routing.module';
import {LayoutModule} from './layout/layout.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AppAdminModule} from './app-admin/app-admin.module';
import {ThemeService} from './shared/theme/theme.service';
import {App} from './app-admin/app.interface';
import {AppAdminService} from './app-admin/app-admin.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomHttpInterceptor} from './shared/http/custom-http.interceptor';
import {AppRegistryService} from './app-registry.service';

export interface AppType {
  name: string;
  appClazz: Type<App>;
}

export interface LandscapeAdminConfig {
  landscapeApi?: string;
  appTypes?: AppType[];
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxLandscapeAdminRoutingModule,
    LayoutModule,
    DashboardModule,
    AppAdminModule
  ],
  declarations: [NgxLandscapeAdminComponent],
  exports: [NgxLandscapeAdminComponent]
})
export class NgxLandscapeAdminModule {

  static withConfig(lsAdminConfig: LandscapeAdminConfig): ModuleWithProviders {

    // Landscape Api validation
    if (!lsAdminConfig.landscapeApi) {
      lsAdminConfig.landscapeApi = '';
    }

    // App Types validation
    if (!lsAdminConfig.appTypes) {
      lsAdminConfig.appTypes = [];
    }

    return {
      ngModule: NgxLandscapeAdminModule,
      providers: [
        AppRegistryService,
        ThemeService,
        AppAdminService,
        { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
        { provide: 'lsAdminConfig', useValue: lsAdminConfig }
      ]
    };
  }

}
