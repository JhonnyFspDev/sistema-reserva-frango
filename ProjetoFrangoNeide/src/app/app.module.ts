import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyComponent } from './components/buy/buy.component';
import { DisplayClientsComponent } from './components/display-clients/display-clients.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ModalComponent } from './components/modal/modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgxMaskDirective, provideNgxMask, IConfig } from 'ngx-mask';
import {

  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BuyModalComponent } from './components/buy-modal/buy-modal.component';
import { BuySuccessModalComponent } from './components/buy-success-modal/buy-success-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyComponent,
    DisplayClientsComponent,
    EditClientComponent,
    ModalComponent,
    BuyModalComponent,
    BuySuccessModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    NgxMaskDirective
  ],
  providers: [
    provideAnimationsAsync(),
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
    ),
  ]
};
