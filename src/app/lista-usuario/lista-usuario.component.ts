import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  usuario:Usuario = new Usuario();
  usuario2:Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {

    this.usuario.id=1;
    this.usuario.nome="Carlos Roberto";
    this.usuario.usuario="carlos.lima";
    this.usuario.senha="123456";
    this.usuario.ativo=true;

    this.usuario2.id=1;
    this.usuario2.nome="Luciene Lima";
    this.usuario2.usuario="luciene.lima";
    this.usuario2.senha="654321";
    this.usuario2.ativo=true;
    //TODO: Criar uma lista de usuários no front end

    //this.usuarios

    //Link para continuação
    //https://www.javaguides.net/2019/06/spring-boot-angular-8-crud-part-3-develop-angular-8-crud-operations.html

  }

}
