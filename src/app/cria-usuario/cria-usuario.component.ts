import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cria-usuario',
  templateUrl: './cria-usuario.component.html',
  styleUrls: ['./cria-usuario.component.css']
})
export class CriaUsuarioComponent implements OnInit {

  _usuario:Usuario = new Usuario();
  _submetido:boolean = false;

  constructor(private usuarioService:UsuarioService/*
              private router:Router*/) { }

  ngOnInit(): void {
  }

  novoUsuario():void{
    this._submetido = false;
    this._usuario = new Usuario();
  }

  salvarUsuario(){
    this.usuarioService.criaUsuario(this._usuario);
    this._usuario = new Usuario();
    this.navegarParaListagem();
  }

  onSubmit() {
    this._submetido = true;
    this.salvarUsuario();    
  }

  navegarParaListagem(){
    //this.router.navigate(['/usuarios']);
  }

}
