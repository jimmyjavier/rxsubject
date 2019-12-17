import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemitenteComponent } from './remitente/remitente.component';
import { DestinatarioUnoComponent } from './destinatario-uno/destinatario-uno.component';
import { ComponenteAbueloComponent } from './componente-abuelo/componente-abuelo.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteNietoComponent } from './componente-nieto/componente-nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    RemitenteComponent,
    DestinatarioUnoComponent,
    ComponenteAbueloComponent,
    ComponentePadreComponent,
    ComponenteNietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
