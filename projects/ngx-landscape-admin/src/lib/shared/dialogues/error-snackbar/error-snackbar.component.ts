import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'lib-error-snackbar',
  templateUrl: './error-snackbar.component.html'
})
export class ErrorSnackbarComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

}
