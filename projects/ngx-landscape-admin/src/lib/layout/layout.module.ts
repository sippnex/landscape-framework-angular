import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
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
