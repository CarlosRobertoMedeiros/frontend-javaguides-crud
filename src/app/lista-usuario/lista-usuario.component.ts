import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
   
  constructor(private usuarioService:UsuarioService,
              private routes: Router) { }

  ngOnInit(): void {
    this.listaTodos();
  }

  listaTodos(){
    this.usuarios = this.usuarioService.getUsuarios();
  }

  detalhaPorId(id:number){
    this.routes.navigate(['usuarios', id]);
  }

  excluiPorId(id:number){
     return this.usuarioService.excluiPorId(id)
        .subscribe(
          dados =>{
            console.log(dados);
            this.listaTodos();
          },
          erro => console.log(erro));
  }

  //TODO: Fazer no Momento Oportuno
  atualizaPorId(id:number){
    this.routes.navigate(['usuarios/atualiza/',id]);
  }

}
//TODO: Criar uma lista de usuários no front end

    //this.usuarios

    //Link para continuação
    //https://www.javaguides.net/2019/06/spring-boot-angular-8-crud-part-3-develop-angular-8-crud-operations.html