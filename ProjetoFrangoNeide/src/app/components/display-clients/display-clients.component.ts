import { Client } from './../../models/client.model';
import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AutorizacaoService } from '../../services/autorizacao.service';


@Component({
  selector: 'app-display-clients',
  templateUrl: './display-clients.component.html',
  styleUrl: './display-clients.component.scss'
})
export class DisplayClientsComponent implements OnInit{

  searchIcon = 'assets/images/search.svg';
  clients$ = new Observable<Client[]>();
  private seachTerm = new BehaviorSubject<string>('');
  quantidadeClientes: number = 0;

  private autenticadoService = inject(AutorizacaoService);

  constructor(private clientService: ClientService, private route: Router, private modal: MatDialog) {}
  
  //Ao iniciar ele faz os filtros para buscar por nome no input
  ngOnInit(): void {
    this.clients$ = this.seachTerm.pipe(switchMap((term: string) =>
      this.clientService.obterClientes().pipe(map(clients =>
        clients.filter(client =>
          client.nome.toLowerCase().includes(term.toLowerCase()))
    ))));
    this.obterQuantidadeClientes();
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.seachTerm.next(value);
  }

  obterIdClient(client: Client){
    return client.id;
  }

  navigationToEdit(clientId: number){
    this.route.navigate([`/edit`, clientId]);
  }

  openDeleteModel(client: Client) {

    const modelRef = this.modal.open(ModalComponent, {
      data: {name: `${client.nome}`},
      width: '300px',
      disableClose: true,
      backdropClass: 'custom-backdrop'
    });

    modelRef.afterClosed().subscribe(results => {
      if(results) {
        this.removeClient(client.id);
      }
    })
  }

  removeClient(clientId: Number){
    this.clientService.deleteClient(clientId).subscribe(_ => {
      this.clients$ = this.clientService.obterClientes();
      this.obterQuantidadeClientes();
    })
  }

  deslogar(){
    if(this.autenticadoService.obterStatusLogin()){
      this.autenticadoService.deslogar();
      this.route.navigate(["/login"]);
    }
     return;
  }

  obterQuantidadeClientes(): void {
     this.clientService.obterQuantidadeClientes()
     .subscribe(
      (quantidade) => {
        this.quantidadeClientes = quantidade;
      },
      (error) => {
        console.error('Erro ao obter a quantidade de clientes:', error);
      }
    );
  }

}
