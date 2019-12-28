import {App} from './app.interface';

export class BaseApp implements App {
  id: string;
  name: string;
  type: string;
  icon = './assets/img/base-app-icon.svg';
}
