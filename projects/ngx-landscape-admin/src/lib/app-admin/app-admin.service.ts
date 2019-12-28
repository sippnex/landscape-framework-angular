import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RestApiPage} from '../shared/util/rest-api-paging/rest-api-page';
import {RestApiPagingConfig} from '../shared/util/rest-api-paging/rest-api-paging-config';
import {LandscapeAdminConfig} from '../ngx-landscape-admin.module';
import {App} from './app.interface';
import {AppRegistryService} from '../app-registry.service';

@Injectable()
export class AppAdminService {

  private currentAppsPagingConfig: RestApiPagingConfig = new RestApiPagingConfig();

  constructor(@Inject('lsAdminConfig') private lsAdminConfig: LandscapeAdminConfig, private http: HttpClient, private appRegistryService: AppRegistryService) {
  }

  public getAllApps(pagingConfig: RestApiPagingConfig): Observable<RestApiPage<App>> {
    this.currentAppsPagingConfig = pagingConfig;

    const params = new HttpParams()
      .set('page', this.currentAppsPagingConfig.page.toString())
      .set('size', this.currentAppsPagingConfig.size.toString())
      .set('sortDir', this.currentAppsPagingConfig.sortDir)
      .set('sort', this.currentAppsPagingConfig.sort);

    return this.http.get(this.lsAdminConfig.landscapeApi + '/admin/apps', {params: params}).pipe(map((data: any) => {
      return this.appRegistryService.parseAppPage(data);
    }));
  }

  public getAppById(appId: number): Observable<App> {
    return this.http.get(this.lsAdminConfig.landscapeApi + '/admin/apps/' + appId).pipe(map((data: any) => {
      return this.appRegistryService.parseApp(data);
    }));
  }

  public getPagingConfig(): RestApiPagingConfig {
    return this.currentAppsPagingConfig;
  }

  public resetPagingConfig() {
    this.currentAppsPagingConfig = new RestApiPagingConfig();
  }

}
