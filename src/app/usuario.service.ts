import { Injectable} from '@angular/core';

import { Usuario } from './usuario';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly USUARIO_SERVICE_API="http://localhost:3000/usuarios";
  
  constructor(private http:HttpClient) { }

  getUsuarios():Observable<any>{
   return this.http.get(this.USUARIO_SERVICE_API);
  }

  getUsuario(id:number):Observable<any>{
    return this.http.get(`${this.USUARIO_SERVICE_API}/${id}`);
  }

  criaUsuario(usuario:Object):Observable<any>{
    return this.http.post(`${this.USUARIO_SERVICE_API}`,usuario);
  }

  atualizaUsuario(id: number, usuario: any):Observable<any>{
    return this.http.put(`${this.USUARIO_SERVICE_API}/${id}`,usuario);
  }

  excluiPorId(id: number):Observable<any> {
    return this.http.delete(`${this.USUARIO_SERVICE_API}/${id}`, {responseType:'text'});
  }
  
  
}

