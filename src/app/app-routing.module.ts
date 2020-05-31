import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CriaUsuarioComponent } from './cria-usuario/cria-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

const rotas: Routes = [
    {path: 'usuarios', component:ListaUsuarioComponent},
    {path: 'usuarios/add', component:CriaUsuarioComponent},
    {path: 'usuarios/detalhes/:id', component:DetalheUsuarioComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
