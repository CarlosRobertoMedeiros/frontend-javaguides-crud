import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();

    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuario(this.id)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.usuario = new Usuario();
    console.log("sadfadsfas");
    //this.navegarParaListagem();
  }

  atualizaUsuario() {
    this.usuarioService.atualizaUsuario(this.id, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.usuario = new Usuario();
    this.navegarParaListagem;
  }

  onSubmit(usuarioForm:NgForm) {
    this.atualizaUsuario();    
  }

  navegarParaListagem(){
    this.router.navigate(['/usuarios']);  
  }

}
