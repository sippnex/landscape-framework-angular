import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';
import {ThemeService} from 'ngx-landscape-core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'lib-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private activeTheme: any;

  @HostBinding('class') componentCssClass;

  constructor(@Inject(DOCUMENT) private document, private router: Router, private themeService: ThemeService, public overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    this.themeChanged(this.themeService.getActiveTheme());
    this.themeService.onActiveThemeChanged().subscribe(theme => this.themeChanged(theme));
  }

  themeChanged(theme: any) {
    this.document.getElementById('theme').setAttribute('href', theme.cssFile);
    this.overlayContainer.getContainerElement().classList.replace(this.activeTheme ? this.activeTheme.name : null, theme.name);
    this.componentCssClass = theme.name;
    this.activeTheme = theme;
  }

}
