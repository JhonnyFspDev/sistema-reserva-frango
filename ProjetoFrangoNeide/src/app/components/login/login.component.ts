import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: any;

  private autorizacaoService = inject(AutorizacaoService);
  private routerService = inject(Router);
  constructor(private formBuilder: FormBuilder) {
    this.criarForm();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      usuario: [''],

      senha: ['']
    });
  }

  usuarioDB: string = "teste";
  senhaDB: string = "12345678";
  mensagem: string = '';

  login(){

    if (this.form.get('usuario').value == this.usuarioDB && this.form.get('senha').value == this.senhaDB) {

      this.autorizacaoService.autorizar();
      this.checkLogin();
      this.mensagem = "Login feito com sucesso!";

    } else
      this.mensagem = "Usuario ou a senha esta errado!";

  }

  checkLogin() {

    if(this.autorizacaoService.obterStatusLogin())
      this.routerService.navigate(["/display"]);

    else
      return;
  }
}
