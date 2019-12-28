import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class ThemeService {

  private themes = [
    {
      'id': 1,
      'name': 'default-theme',
      'cssFile': '/assets/css/default-theme.css'
    },
    {
      'id': 2,
      'name': 'dark-theme',
      'cssFile': '/assets/css/dark-theme.css'
    },
    {
      'id': 3,
      'name': 'candy-theme',
      'cssFile': '/assets/css/candy-theme.css'
    },
    {
      'id': 4,
      'name': 'pink-bluegrey-theme',
      'cssFile': '/assets/css/pink-bluegrey-theme.css'
    }
  ];
  private activeTheme = this.themes[2];
  private activeThemeSubject = new Subject<any>();

  setActiveTheme(themId?: number, themeName?: string) {
    const theme = this.themes.filter(t => t.id === themId || t.name === themeName)[0];
    if (theme !== undefined) {
      this.activeTheme = theme;
      this.activeThemeSubject.next(this.activeTheme);
    }
  }

  getActiveTheme(): any {
    return this.activeTheme;
  }

  onActiveThemeChanged(): Observable<any> {
    return this.activeThemeSubject.asObservable();
  }

}
