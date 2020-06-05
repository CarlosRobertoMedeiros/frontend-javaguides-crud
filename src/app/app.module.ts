import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CriaUsuarioComponent } from './cria-usuario/cria-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CriaUsuarioComponent,
    ListaUsuarioComponent,
    DetalheUsuarioComponent,
    AtualizaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
