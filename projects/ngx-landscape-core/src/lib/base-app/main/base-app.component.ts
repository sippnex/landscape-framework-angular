import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseAppService} from '../base-app.service';
import {App} from '../../..';

@Component({
  selector: 'lib-base-app',
  template: `
    <p>
      base-app works!
    </p>
  `,
  styles: []
})
export class BaseAppComponent implements OnInit {

  constructor(private route: ActivatedRoute, private baseAppService: BaseAppService, private injector: Injector) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.baseAppService.getAppById(params['id']).subscribe((app: App) => {
        this.init(this.injector, app);
      });
    });
  }

  init(injector: Injector, app: App) {
    // This method should be overwritten in apps for init logic
  }

}
