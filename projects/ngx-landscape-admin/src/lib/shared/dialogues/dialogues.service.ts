import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SuccessSnackbarComponent} from './success-snackbar/success-snackbar.component';
import {WarningSnackbarComponent} from './warning-snackbar/warning-snackbar.component';
import {ErrorSnackbarComponent} from './error-snackbar/error-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class DialoguesService {

  constructor(public snackBar: MatSnackBar) { }

  public showSuccessSnackbar(message: string) {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: 4000,
      panelClass: ['dialog-snackbar-panel', 'dialog-success-snackbar-panel'],
      verticalPosition: 'top',
      data: {
        message: message
      }
    });
  }

  public showWarningSnackbar(message: string) {
    this.snackBar.openFromComponent(WarningSnackbarComponent, {
      duration: 4000,
      panelClass: ['dialog-snackbar-panel', 'dialog-warning-snackbar-panel'],
      verticalPosition: 'top',
      data: {
        message: message
      }
    });
  }

  public showErrorSnackbar(message: string) {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: 4000,
      panelClass: ['dialog-snackbar-panel', 'dialog-error-snackbar-panel'],
      verticalPosition: 'top',
      data: {
        message: message
      }
    });
  }

}
