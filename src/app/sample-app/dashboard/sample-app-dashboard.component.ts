import {Component, Injector} from '@angular/core';
import {BaseApp, BaseAppDashboardComponent} from 'ngx-landscape-core';
import {SampleApp} from '../sample-app';

@Component({
  selector: 'app-sample-app-dashboard',
  templateUrl: './sample-app-dashboard.component.html',
  styleUrls: ['./sample-app-dashboard.component.scss']
})
export class SampleAppDashboardComponent extends BaseAppDashboardComponent {

  init(injector: Injector, app: BaseApp) {
    console.log('SampleApp Dashboard is ready!');
    console.log(<SampleApp> app);
  }

}
