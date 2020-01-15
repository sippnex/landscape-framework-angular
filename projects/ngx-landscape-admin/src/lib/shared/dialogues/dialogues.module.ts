import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatIconModule, MatSnackBarModule} from '@angular/material';
import { SuccessSnackbarComponent } from './success-snackbar/success-snackbar.component';
import {DialoguesService} from './dialogues.service';
import { ErrorSnackbarComponent } from './error-snackbar/error-snackbar.component';
import { WarningSnackbarComponent } from './warning-snackbar/warning-snackbar.component';
import { DeletionDialogComponent } from './deletion-dialog/deletion-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    SuccessSnackbarComponent,
    ErrorSnackbarComponent,
    WarningSnackbarComponent,
    DeletionDialogComponent
  ],
  providers: [
    DialoguesService
  ],
  entryComponents: [
    SuccessSnackbarComponent,
    ErrorSnackbarComponent,
    WarningSnackbarComponent,
    DeletionDialogComponent
  ]
})
export class DialoguesModule { }
