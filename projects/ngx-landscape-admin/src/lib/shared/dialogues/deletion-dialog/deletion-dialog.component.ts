import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export class DeletionDialogData {
  title: string;
  text: string;
}

@Component({
  selector: 'lib-deletion-dialog',
  templateUrl: './deletion-dialog.component.html'
})
export class DeletionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeletionDialogData) {
    if (data.title == null || data.title === '') { data.title = 'Confirm deletion'; }
    if (data.text == null || data.text === '') { data.text = 'Do you really want to delete?'; }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
