import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStoreComponent } from './app-store.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [AppStoreComponent],
})
export class AppStoreModule { }
