import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CriaUsuarioComponent } from './cria-usuario/cria-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CriaUsuarioComponent,
    ListaUsuarioComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
