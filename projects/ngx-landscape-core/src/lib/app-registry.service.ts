import {Inject, Injectable, Type} from '@angular/core';
import {plainToClass} from 'class-transformer';
import {Router, Routes} from '@angular/router';
import {AppType, LandscapeCoreConfig} from './ngx-landscape-core.module';
import {App} from './base-app/app.interface';
import {BaseApp} from './base-app/base-app.model';

@Injectable()
export class AppRegistryService {

  constructor(@Inject('lsCoreConfig') private lsCoreConfig: LandscapeCoreConfig, private router: Router) {
    this.initAppRoutes();
  }

  public initAppRoutes() {
    const appRoutes: Routes = [];
    this.lsCoreConfig.appTypes.forEach(appType => appRoutes.push({
      path: appType.route + '/:id',
      component: appType.mainComponent
    }));
    this.router.config
      .find(route => route.path === 'core').children
      .find(childRoute => childRoute.path === 'apps').children = appRoutes;
  }

  public getAppType(typeName: string): AppType {
    return this.lsCoreConfig.appTypes.find(appType => appType.name === typeName);
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
