import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AppAdminModule} from './app-admin/app-admin.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    AdminRoutingModule,
    LayoutModule,
    DashboardModule,
    AppAdminModule
  ],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})
export class NgxLandscapeAdminModule {
}
