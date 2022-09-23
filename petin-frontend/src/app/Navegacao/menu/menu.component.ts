import { Component } from '@angular/core';
import { UsuarioService } from 'src/Service/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  constructor(public usuarioService: UsuarioService, private route: Router) { }

  public logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id_cliente');
    window.localStorage.removeItem('isCliente');
    this.route.navigate(['/Home']);
  }

}

