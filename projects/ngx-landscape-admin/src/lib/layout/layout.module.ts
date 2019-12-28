import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
