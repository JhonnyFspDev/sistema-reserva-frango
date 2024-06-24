import { ActivatedRoute, CanActivateFn, RouterState, RouterStateSnapshot } from '@angular/router';
import { AutorizacaoService } from '../services/autorizacao.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const autorizadoGuard: CanActivateFn = (route, state) => {
  const autorizadoService = inject(AutorizacaoService);
  const routerService = inject(Router);

  const usuarioEstaLogado = autorizadoService.obterStatusLogin();

  if(usuarioEstaLogado)
    return true;

  routerService.navigate(["/login"]);

  return false;
}



