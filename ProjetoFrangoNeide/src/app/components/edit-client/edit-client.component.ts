import { Client } from './../../models/client.model';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})
export class EditClientComponent implements OnInit{

  protected form: FormGroup;
  client: Client | undefined;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router
  )
  {
    this.form = this.formBuilder.group(
    {
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      pedidoEntregue: [0, [Validators.required]],
      statusCompra: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const clientId = Number(params.get('id'));
      if (clientId) {
        this.carregarCliente(clientId);
      }
    });
  }


  navigationToDisplay(){
    this.router.navigate(['/display']);
  }

  carregarCliente(clientId: number): void{
    this.clientService.obterIdClient(clientId).subscribe(client => {
      this.client = client;
      this.form.patchValue(client)
    });
  }

  onSubmit(): void{
    if (this.form.valid && this.client) {
      const updatedClient = { ...this.client, ...this.form.value };
      this.clientService.editarClient(updatedClient).subscribe(response => {
        console.log('Client updated:', response);
        this.navigationToDisplay();
      }, error => {
        console.error('Error updating client:', error);
      });
    }
  }
}
