import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardHostDirective} from './dashboard-host.directive';
import {App, BaseAppDashboardComponent} from 'ngx-landscape-core';
import {AppRegistryService} from '../../app-registry.service';

@Component({
  selector: 'lib-dashboard-host',
  templateUrl: './dashboard-host.component.html',
  styleUrls: ['./dashboard-host.component.scss']
})
export class DashboardHostComponent implements OnInit {

  @Input() app: App;
  @ViewChild(DashboardHostDirective, { static: true }) dashboardHost: DashboardHostDirective;

  constructor(private appRegistryService: AppRegistryService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const dashboardComponent = this.appRegistryService.getAppType(this.app.type).dashboardComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dashboardComponent);
    const viewContainerRef = this.dashboardHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseAppDashboardComponent>componentRef.instance).app = this.app;
  }

}
