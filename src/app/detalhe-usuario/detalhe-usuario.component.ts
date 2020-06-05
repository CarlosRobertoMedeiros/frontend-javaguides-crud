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
              private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuario(this.id)
      .subscribe(usuario=>this.usuario = usuario),
      erro =>console.log(erro);
  }

  retornaAListagem(){
    this.router.navigate(['usuarios']);
  }

}
