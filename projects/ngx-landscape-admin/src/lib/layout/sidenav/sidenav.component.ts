import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDashboard() {
    this.router.navigateByUrl('/admin/dashboard');
  }

  openAppList() {
    this.router.navigateByUrl('/admin/app-list');
  }

}
