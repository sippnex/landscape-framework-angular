import {Inject, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LandscapeConfig} from '../ngx-landscape-core.module';
import {AppRegistryService} from '../app-registry.service';
import {App} from '../app-host/app.interface';

@Injectable()
export class BaseAppService {

  constructor(@Inject('lsConfig') private lsConfig: LandscapeConfig, private http: HttpClient, private appRegistryService: AppRegistryService) {
  }

  public getAppById(id: string): Observable<App> {
    return this.http.get(this.lsConfig.api + '/core/apps/' + id).pipe(map((data: any) => {
      return this.appRegistryService.parseApp(data);
    }));
  }

}
