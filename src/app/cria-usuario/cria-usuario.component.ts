import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cria-usuario',
  templateUrl: './cria-usuario.component.html',
  styleUrls: ['./cria-usuario.component.css']
})
export class CriaUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  submetido:boolean = false;

  constructor(private usuarioService:UsuarioService,
              private router:Router) { }

  ngOnInit(): void {
  
  }

  novo():void{
    this.submetido = false;
    this.usuario = new Usuario();
  }

  salva(){
    this.usuarioService.criaUsuario(this.usuario)
      .subscribe(dados => console.log(dados), erro => console.log(erro));

    this.usuario = new Usuario();

    this.navegarParaListagem();
  }

  onSubmit(usuarioForm:NgForm) {
    this.submetido = true;
    this.salva();    
  }

  navegarParaListagem(){
    this.router.navigate(['/usuarios']);
  }
}
