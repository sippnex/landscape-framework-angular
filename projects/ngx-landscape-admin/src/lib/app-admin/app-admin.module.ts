import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { AppItemComponent } from './app-item/app-item.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [AppListComponent, AppItemComponent],
  exports: [AppListComponent]
})
export class AppAdminModule { }
