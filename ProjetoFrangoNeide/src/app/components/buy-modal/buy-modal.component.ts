import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrl: './buy-modal.component.scss'
})
export class BuyModalComponent {
  constructor(public modalRef: MatDialogRef<BuyModalComponent>) {}


}
