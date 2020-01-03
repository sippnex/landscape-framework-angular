/*import {Inject, Injectable} from '@angular/core';
import {plainToClass} from 'class-transformer';
import {AppType, LandscapeAdminConfig} from './ngx-landscape-admin.module';
import {App} from './app-admin/app.interface';
import {RestApiPage} from './shared/util/rest-api-paging/rest-api-page';

@Injectable()
export class AppRegistryService {

  constructor(@Inject('lsAdminConfig') private lsAdminConfig: LandscapeAdminConfig) {
  }

  public getAppType(typeName: string): AppType {
    return this.lsAdminConfig.appTypes.find(appType => appType.name === typeName);
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

}
*/
