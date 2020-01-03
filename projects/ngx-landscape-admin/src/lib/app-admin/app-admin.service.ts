import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {App, AppRegistryService, LandscapeConfig, RestApiPage, RestApiPagingConfig} from 'ngx-landscape-core';

@Injectable()
export class AppAdminService {

  private currentAppsPagingConfig: RestApiPagingConfig = new RestApiPagingConfig();

  constructor(@Inject('lsConfig') private lsConfig: LandscapeConfig, private http: HttpClient, private appRegistryService: AppRegistryService) {
  }

  public getAllApps(pagingConfig: RestApiPagingConfig): Observable<RestApiPage<App>> {
    this.currentAppsPagingConfig = pagingConfig;

    const params = new HttpParams()
      .set('page', this.currentAppsPagingConfig.page.toString())
      .set('size', this.currentAppsPagingConfig.size.toString())
      .set('sortDir', this.currentAppsPagingConfig.sortDir)
      .set('sort', this.currentAppsPagingConfig.sort);

    return this.http.get(this.lsConfig.api + '/admin/apps', {params: params}).pipe(map((data: any) => {
      return this.appRegistryService.parseAppPage(data);
    }));
  }

  public getAppById(appId: number): Observable<App> {
    return this.http.get(this.lsConfig.api + '/admin/apps/' + appId).pipe(map((data: any) => {
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
