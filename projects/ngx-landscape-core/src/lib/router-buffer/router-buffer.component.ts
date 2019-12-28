import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppRegistryService} from '../app-registry.service';

@Component({
  selector: 'lib-router-buffer',
  template: `
    <div style="padding: 24px">Router Buffering, please wait ...</div>
  `
})
export class RouterBufferComponent {

  constructor(private appRegistryService: AppRegistryService, private route: ActivatedRoute, private router: Router) {
    this.appRegistryService.initAppRoutes();
    let url = 'core';
    this.route.snapshot.url.forEach(urlSegment => url += '/' + urlSegment.path);
    this.router.navigateByUrl(url);
  }

}
