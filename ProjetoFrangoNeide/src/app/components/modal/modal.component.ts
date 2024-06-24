import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public modalRef: MatDialogRef<ModalComponent>, @Inject(DIALOG_DATA) public data: {name: string}) {}

  onNoClick() {
    this.modalRef.close(false);
  }

  onYesClick(){
    this.modalRef.close(true);
  }
}
