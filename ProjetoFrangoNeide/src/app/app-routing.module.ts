import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayClientsComponent } from './components/display-clients/display-clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { BuyComponent } from './components/buy/buy.component';
import { LoginComponent } from './components/login/login.component';
import { autorizadoGuard } from './_guard/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    component: BuyComponent
  },

  {
    path: 'display',
    component: DisplayClientsComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path:'edit/:id',
    component: EditClientComponent,
    canActivate: [autorizadoGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '**',
    redirectTo: 'home'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
