import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { CriaUsuarioComponent } from './cria-usuario/cria-usuario.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios : Usuario[] = [
    new Usuario(1, "Carlos Roberto", "carlos.lima", "123456", true),
    new Usuario(2, "Luciene Medeiros", "luciene.medeiros", "1654321", true),
    new Usuario(3, "Ezequias Alves", "ezequias.alves", "65412", true)
  ]

  constructor() { }

  get getUsuarios(){
    return this.usuarios;
  }

  public getUsuario(id:Number):any{
    let index:number = this.usuarios.findIndex(usuario => usuario.getId ==id);
    if (index>=0){
      console.log(this.usuarios.slice(index,index+1));
      return this.usuarios.slice(index,index+1);
    }

  }

  public deletaUsuario(id: number): any {
    let index = this.usuarios.findIndex(usuario => usuario.getId ==id);
    this.usuarios.splice(index,1);
  }

  


}
