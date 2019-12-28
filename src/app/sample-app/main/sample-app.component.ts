import {Component, Injector} from '@angular/core';
import {SampleApp} from '../sample-app';
import {BaseAppComponent} from 'ngx-landscape-core';

@Component({
  selector: 'app-sample-app',
  templateUrl: './sample-app.component.html',
  styleUrls: ['./sample-app.component.scss']
})
export class SampleAppComponent extends BaseAppComponent {

  init(injector: Injector, app: SampleApp) {
    console.log('SampleApp is ready!');
    console.log(app);
  }

}
