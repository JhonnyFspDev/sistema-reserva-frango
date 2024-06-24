import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-success-modal',
  templateUrl: './buy-success-modal.component.html',
  styleUrl: './buy-success-modal.component.scss'
})
export class BuySuccessModalComponent {
  constructor(public modalRef: MatDialogRef<BuySuccessModalComponent>) {}
}
