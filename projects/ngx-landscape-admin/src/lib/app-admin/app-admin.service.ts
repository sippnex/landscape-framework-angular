import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {App, AppRegistryService, AppType, LandscapeConfig, RestApiPage, RestApiPagingConfig} from 'ngx-landscape-core';
import {FiremawDto} from 'ngx-firemaw-client';
import {FiremawService} from '../shared/firemaw/firemaw.service';

@Injectable()
export class AppAdminService {

  private currentAppsPagingConfig: RestApiPagingConfig = new RestApiPagingConfig();

  constructor(@Inject('lsConfig') private lsConfig: LandscapeConfig, private http: HttpClient, private firemawService: FiremawService, private appRegistryService: AppRegistryService) {
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

  public getAppById(appId: string): Observable<FiremawDto> {
    return this.firemawService.get(this.lsConfig.api + '/admin/apps/' + appId);
  }

  public getAppSkeleton(appType: AppType): Observable<FiremawDto> {
    return this.firemawService.get(this.lsConfig.api + '/admin/apps/skeleton/' + appType.name);
  }

  public createApp(appFiremawDto: FiremawDto): Observable<any> {
    return this.firemawService.post(this.lsConfig.api + '/admin/apps', appFiremawDto);
  }

  public updateApp(appFiremawDto: FiremawDto): Observable<any> {
    return this.firemawService.put(this.lsConfig.api + '/admin/apps', appFiremawDto);
  }

  public getPagingConfig(): RestApiPagingConfig {
    return this.currentAppsPagingConfig;
  }

  public resetPagingConfig() {
    this.currentAppsPagingConfig = new RestApiPagingConfig();
  }

}
