import { Injectable} from '@angular/core';

import { Usuario } from './usuario';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario1:Usuario = new Usuario();
  private _usuario2:Usuario = new Usuario();
  private _usuario3:Usuario = new Usuario();
  private _usuarios:Usuario[]= new Array;
  private static _idInicial:Number = 4;

  constructor() { }

  private carregaValoresPadrao(): void {
    this._usuario1.id=1;
    this._usuario1.nome="Carlos Roberto";
    this._usuario1.usuario="carlos.lima";
    this._usuario1.senha="123456";
    this._usuario1.ativo=true;

    this._usuario2.id=2;
    this._usuario2.nome="Luciene Medeiros";
    this._usuario2.usuario="luciene.medeiros";
    this._usuario2.senha="654321";
    this._usuario2.ativo=true;

    this._usuario3.id=3;
    this._usuario3.nome="Ezequias Alves";
    this._usuario3.usuario="ezequias.alves";
    this._usuario3.senha="654123";
    this._usuario3.ativo=true;

    this._usuarios.push(this._usuario1);
    this._usuarios.push(this._usuario2);
    this._usuarios.push(this._usuario3);
  }

  private VerificaArrayDeUsuarios(){
    if (this._usuarios.length==0){
      this.carregaValoresPadrao();
   }
  }
  
  getUsuarios(){
   this.VerificaArrayDeUsuarios();
   return this._usuarios;
  }

  getUsuario(id:Number):any{
    this.VerificaArrayDeUsuarios();
    let index:number = this._usuarios.findIndex(usuario => usuario.id ==id);
    if (index>=0){
      return this._usuarios.slice(index,index+1);
    }

  }

  deletaUsuario(id: number): any {
    this.VerificaArrayDeUsuarios();
    let index = this._usuarios.findIndex(usuario => usuario.id ==id);
    this._usuarios.splice(index,1);
  }

  
  private criaChavePrimaria(usuario:Usuario){
    let tamanhoArray:number = this._usuarios.length;
    usuario.id = ++tamanhoArray;
  }


  criaUsuario(usuario:Usuario):any{
    this.VerificaArrayDeUsuarios();
    this.criaChavePrimaria(usuario);
    this._usuarios.push(usuario);
  }

  atualizaUsuario(usuario:Usuario){
    let indice = this._usuarios.findIndex(u =>{
      u.id ===usuario.id;
    })
    if (indice>=0){
      this._usuarios.splice(indice,1);
      this._usuarios.splice(indice,0,usuario);   
    }
  }

  
}

