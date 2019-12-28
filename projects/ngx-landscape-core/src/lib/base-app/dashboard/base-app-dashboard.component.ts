import {Component, Injector, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NamingConverter} from '../../shared/util/converter/naming-converter';
import {App} from '../app.interface';

@Component({
  selector: 'lib-base-app-dashboard',
  template: `
    {{ app.name }}
    <button class="not-draggable" mat-raised-button color="primary" (click)="openApp()">Open</button>
  `,
  styles: []
})
export class BaseAppDashboardComponent implements OnInit {

  @Input() app: App;

  constructor(private router: Router, private injector: Injector) {
  }

  ngOnInit() {
    this.init(this.injector, this.app);
  }

  openApp() {
    this.router.navigateByUrl('/core/apps/' + NamingConverter.toJsName(this.app.type) + '/' + this.app.id);
  }

  init(injector: Injector, app: App) {
    // This method should be overwritten in apps for init logic
  }

}
