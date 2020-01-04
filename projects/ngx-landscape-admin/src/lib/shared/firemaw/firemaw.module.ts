import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiremawService} from './firemaw.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    FiremawService
  ]
})
export class FiremawModule { }
