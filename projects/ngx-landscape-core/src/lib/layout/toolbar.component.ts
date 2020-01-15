import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ThemeService} from '../shared/theme/theme.service';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  openAppStore() {
    this.router.navigateByUrl('/core/app-store');
  }

  openAdminDashboard() {
    this.router.navigateByUrl('/admin/dashboard');
  }

  changeTheme() {
    this.themeService.setActiveTheme(this.getRandomInt(1, 5));
  }

  getRandomInt(min, max) {
    let value;
    do {
      value = Math.floor(Math.random() * Math.floor(max));
    } while (value < min);
    return value;
  }

}
