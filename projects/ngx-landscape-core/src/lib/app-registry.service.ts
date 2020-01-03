import {Inject, Injectable, Type} from '@angular/core';
import {plainToClass} from 'class-transformer';
import {Router, Routes} from '@angular/router';
import {AppType, LandscapeConfig} from './ngx-landscape-core.module';
import {BaseApp} from './base-app/base-app.model';
import {RestApiPage} from './shared/util/rest-api-paging/rest-api-page';
import {App} from './app-host/app.interface';

@Injectable()
export class AppRegistryService {

  constructor(@Inject('lsConfig') private lsConfig: LandscapeConfig, private router: Router) {
    this.initAppRoutes();
  }

  public initAppRoutes() {
    const appRoutes: Routes = [];
    this.lsConfig.appTypes.forEach(appType => appRoutes.push({
      path: appType.route + '/:id',
      component: appType.mainComponent
    }));
    this.router.config
      .find(route => route.path === 'core').children
      .find(childRoute => childRoute.path === 'apps').children = appRoutes;
  }

  public getAllAppTypes(): AppType[] {
    return this.lsConfig.appTypes;
  }

  public getAppType(typeName: string): AppType {
    return this.lsConfig.appTypes.find(appType => appType.name === typeName);
  }

  public parseAppPage(data: any): RestApiPage<App> {
    return new RestApiPage<App>(data.number, data.size, data.totalElements, this.parseAppArray(data.content));
  }

  public parseAppArray(data: any): App[] {
    const apps: App[] = [];
    data.forEach((dataItem: any) => {
      apps.push(this.parseApp(dataItem));
    });
    return apps;
  }

  public parseApp(data: any): App {
    return plainToClass(this.getAppType(data.type).appClazz, data);
  }

  public parseBaseAppArray(data: any): App[] {
    const apps: App[] = [];
    data.forEach((dataItem: any) => {
      apps.push(this.parseApp(dataItem));
    });
    return apps;
  }

  public parseBaseApp(data: any): App {
    return plainToClass(BaseApp, data);
  }

}
