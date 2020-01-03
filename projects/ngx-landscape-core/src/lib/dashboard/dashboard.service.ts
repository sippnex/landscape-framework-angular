import {Inject, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {plainToClass} from 'class-transformer';
import {AppSubscription} from './app-subscription';
import {LandscapeConfig} from '../ngx-landscape-core.module';
import {AppRegistryService} from '../app-registry.service';

@Injectable()
export class DashboardService {

  constructor(@Inject('lsConfig') private lsConfig: LandscapeConfig, private http: HttpClient, private appRegistryService: AppRegistryService) {
  }

  public getAllAppSubscriptions(): Observable<AppSubscription[]> {
    return this.http.get(this.lsConfig.api + '/core/app-subs').pipe(map((data: any) => {
      return this.parseAppSubscriptionArray(data);
    }));
  }

  public updateAppSubscriptionPosition(appId: string, x: number, y: number, rows: number, cols: number) {
    const params = new HttpParams()
      .set('appId', appId)
      .set('x', x.toString())
      .set('y', y.toString())
      .set('rows', rows.toString())
      .set('cols', cols.toString());
    this.http.get(this.lsConfig.api + '/core/app-subs/update-app-position', {params: params}).subscribe(() => {
    });
  }

  private parseAppSubscriptionArray(data: any): AppSubscription[] {
    const appSubscriptions: AppSubscription[] = [];
    data.forEach((dataItem: any) => {
      appSubscriptions.push(this.parseAppSubscription(dataItem));
    });
    return appSubscriptions;
  }

  private parseAppSubscription(data: any): AppSubscription {
    const appSubscription: AppSubscription = plainToClass(AppSubscription, data);
    appSubscription.app = this.appRegistryService.parseApp(appSubscription.app);
    return appSubscription;
  }

}
