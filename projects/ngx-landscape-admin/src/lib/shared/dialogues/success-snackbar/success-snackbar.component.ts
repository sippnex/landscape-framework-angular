import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'lib-success-snackbar',
  templateUrl: './success-snackbar.component.html'
})
export class SuccessSnackbarComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

}
