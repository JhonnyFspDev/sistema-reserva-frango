import { Client, ClientCadastro } from './../models/client.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = `${environment.api}/api/v1/client`;

  //Utilizando o HTTP do Angular
  constructor(private httpClient: HttpClient) {

  }

  obterClientes() {
    return this.httpClient.get<Client[]>(this.url);
  }

  reservaClient(client: ClientCadastro){
    return this.httpClient.post<Client>(this.url, client);
  }

  editarClient(client: Client){
    return this.httpClient.put<Client>(`${this.url}/${client.id}`, client)
  }

  obterIdClient(id: Number) {
    return this.httpClient.get<Client>(`${this.url}/${id}`)
  }

  deleteClient(id : Number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`)
  }

  obterQuantidadeClientes(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/qtde`)
  }
}
