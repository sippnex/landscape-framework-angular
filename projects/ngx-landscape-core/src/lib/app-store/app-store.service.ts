import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LandscapeCoreConfig} from '../ngx-landscape-core.module';
import {AppRegistryService} from '../app-registry.service';
import {App} from '../base-app/app.interface';

@Injectable()
export class AppStoreService {

  constructor(@Inject('lsCoreConfig') private lsCoreConfig: LandscapeCoreConfig, private http: HttpClient, private appRegistryService: AppRegistryService) {
  }

  public getAvailableApps(): Observable<App[]> {
    return this.http.get(this.lsCoreConfig.landscapeApi + '/core/app-store').pipe(map((data: any) => {
      return this.appRegistryService.parseBaseAppArray(data);
    }));
  }

  public getAvailableAppById(appId: string): Observable<App> {
    return this.http.get(this.lsCoreConfig.landscapeApi + '/core/app-store/' + appId).pipe(map((data: any) => {
      return this.appRegistryService.parseBaseApp(data);
    }));
  }

  public subscribeApp(appId: string) {
    const params = new HttpParams()
      .set('appId', appId);
    return this.http.get(this.lsCoreConfig.landscapeApi + '/core/app-store/subscribe', {params: params});
  }

  public unsubscribeApp(appId: string) {
    const params = new HttpParams()
      .set('appId', appId);
    return this.http.get(this.lsCoreConfig.landscapeApi + '/core/app-store/unsubscribe', {params: params});
  }

}
