import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;
  

  constructor(private route: ActivatedRoute,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    //TODO: Ajustar Esse Código Amanhã
    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];
    let usuarioInterno:Usuario = this.usuarioService.getUsuario(this.id);
    console.log("Peguei Aqui"+JSON.stringify(usuarioInterno));
    this.usuario.id = usuarioInterno.id;
    console.log("id"+this.usuario.id); 
    this.usuario.nome = usuarioInterno.nome;
    this.usuario.usuario = usuarioInterno.usuario;
    this.usuario.senha = usuarioInterno.senha;
    this.usuario.ativo = usuarioInterno.ativo;
    console.log("Peguei Aqui Não"+JSON.stringify(this.usuario));
  }

}
