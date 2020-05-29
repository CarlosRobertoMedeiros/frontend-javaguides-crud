import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  private usuarios: Usuario[];
  
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.recarregarInformacoes();
  }

  private recarregarInformacoes() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  get getUsuarios():Usuario[]{
    return this.usuarios;
  }


  public excluiUsuario(id:number){
    return this.usuarioService.deletaUsuario(id);
  }

  public detalhaUsuario(id:number){
    return this.usuarioService.getUsuario(id);
  }

  public atualizaUsuario(usuario:Usuario){
    return this.usuarioService.atualizaUsuario(usuario);
  }

}
//TODO: Criar uma lista de usuários no front end

    //this.usuarios

    //Link para continuação
    //https://www.javaguides.net/2019/06/spring-boot-angular-8-crud-part-3-develop-angular-8-crud-operations.html