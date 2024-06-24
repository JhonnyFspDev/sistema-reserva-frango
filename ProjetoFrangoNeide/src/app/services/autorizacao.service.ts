import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  autorizado = false;

  constructor() { }

  autorizar() {
    localStorage.setItem("login", "sim");

    this.deslogarPorLimiteTempo();
  }

  deslogar() {
    localStorage.clear();
  }

  deslogarPorLimiteTempo() {
    const tempoMaximo:Promise<boolean> = new Promise<boolean>((res) => {
      setTimeout(() => {
        res(true);
        localStorage.clear();
        window.location.reload();
      },7200000)
    });

    return tempoMaximo;
  }
  obterStatusLogin = () => !!localStorage.getItem("login");

}
