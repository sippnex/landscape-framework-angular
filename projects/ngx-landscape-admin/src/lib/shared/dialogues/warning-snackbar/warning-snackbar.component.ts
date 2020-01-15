import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'lib-warning-snackbar',
  templateUrl: './warning-snackbar.component.html'
})
export class WarningSnackbarComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

}
