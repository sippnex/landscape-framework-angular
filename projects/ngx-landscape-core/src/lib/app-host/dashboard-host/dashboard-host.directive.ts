import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDashboardHost]'
})
export class DashboardHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
