import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxLandscapeCoreComponent} from './ngx-landscape-core.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MainHostComponent} from './app-host/main-host/main-host.component';
import {AppStoreComponent} from './app-store/app-store.component';
import {RouterBufferComponent} from './router-buffer/router-buffer.component';

const coreRoutes: Routes = [
  {
    path: 'core',
    component: NgxLandscapeCoreComponent,
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
        path: 'app-store',
        component: AppStoreComponent
      },
      { path: 'apps',
        component: MainHostComponent,
        children: []
      },
      {
        path: '**',
        component: RouterBufferComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  declarations: []
})
export class NgxLandscapeCoreRoutingModule {
}
