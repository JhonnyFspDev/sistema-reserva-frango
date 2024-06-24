import { BuyModalComponent } from './../buy-modal/buy-modal.component';
import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, NonNullableFormBuilder, Validators, FormGroup } from '@angular/forms';
import { stripVTControlCharacters } from 'util';
import { response } from 'express';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { BuySuccessModalComponent } from '../buy-success-modal/buy-success-modal.component';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {
  myimg:string = "assets/images/undraw_successful_purchase_re_mpig.svg";

  private modal = inject(MatDialog);
  constructor(private clientService: ClientService) {

  }
  private formBuilderServer = inject(FormBuilder);

  protected form = this.formBuilderServer.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    statusCompra: ['', Validators.required]
  })

  buttonClick() {
    const formValues = this.form.value;
    const telefoneSemFormatacao = formValues.telefone?.replace(/\D/g, '');
    this.clientService.reservaClient(
    {
      nome: formValues.nome?? '',
      telefone: telefoneSemFormatacao?? '',
      statusCompra: formValues.statusCompra?? '',
    }).subscribe(response => {
      this.openBuyModel();
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });

  }

  openBuyModel() {
    const buymodalRef = this.modal.open(BuyModalComponent, {
      width: '400px',
      disableClose: true,
      backdropClass: 'custom-backdrop',

    });

    buymodalRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        buymodalRef.close();
      }, 3000);
    });

    buymodalRef.afterClosed().subscribe(_ => {
      const successModal = this.modal.open(BuySuccessModalComponent, {
        width: '400px',
        disableClose: true
      });

      successModal.afterOpened().subscribe(_ => {
        setTimeout(() => {
          successModal.close();
          this.clearForm();
        }, 1000)
      })
    });
  }

  clearForm(){
    this.form.reset();
  }

}
