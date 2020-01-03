import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AppRegistryService} from '../app-registry.service';
import {App, LandscapeConfig} from 'ngx-landscape-core';

@Injectable()
export class AppStoreService {

  constructor(@Inject('lsConfig') private lsConfig: LandscapeConfig, private http: HttpClient, private appRegistryService: AppRegistryService) {
  }

  public getAvailableApps(): Observable<App[]> {
    return this.http.get(this.lsConfig.api + '/core/app-store').pipe(map((data: any) => {
      return this.appRegistryService.parseBaseAppArray(data);
    }));
  }

  public getAvailableAppById(appId: string): Observable<App> {
    return this.http.get(this.lsConfig.api + '/core/app-store/' + appId).pipe(map((data: any) => {
      return this.appRegistryService.parseBaseApp(data);
    }));
  }

  public subscribeApp(appId: string) {
    const params = new HttpParams()
      .set('appId', appId);
    return this.http.get(this.lsConfig.api + '/core/app-store/subscribe', {params: params});
  }

  public unsubscribeApp(appId: string) {
    const params = new HttpParams()
      .set('appId', appId);
    return this.http.get(this.lsConfig.api + '/core/app-store/unsubscribe', {params: params});
  }

}
