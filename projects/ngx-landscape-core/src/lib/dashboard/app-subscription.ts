import {GridsterItem} from 'angular-gridster2';
import {App} from 'ngx-landscape-core';

export class AppSubscription implements GridsterItem {

  id: number;
  x: number;
  y: number;
  cols: number;
  rows: number;
  app: App;

}
