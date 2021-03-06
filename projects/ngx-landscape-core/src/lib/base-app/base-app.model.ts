import {App} from '../..';

export class BaseApp implements App {
  id: string;
  type: string;
  name: string;
  subscribed: boolean;
  icon = './assets/img/base-app-icon.svg';
}
