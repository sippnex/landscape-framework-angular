import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { AppItemComponent } from './app-item/app-item.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AppAdminService} from './app-admin.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilebladeConfig, FilebladeModule} from 'ngx-fileblade-client';
import {FiremawModule} from '../shared/firemaw/firemaw.module';
import {DialoguesModule} from '../shared/dialogues/dialogues.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatListModule,
    FiremawModule,
    FilebladeModule.forRoot({
      url: 'http://localhost:8080'
      } as FilebladeConfig),
    DialoguesModule
  ],
  declarations: [AppListComponent, AppItemComponent],
  exports: [AppListComponent],
  providers: [AppAdminService]
})
export class AppAdminModule { }
