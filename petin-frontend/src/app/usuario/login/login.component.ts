import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/Service/usuario.service';
import { Usuario } from 'src/Interface/Usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  postUser = this.fb.group({

    cpf: ['', Validators.required],
    senha: ['', Validators.required],

  });

  public Usuario: Usuario = {} as Usuario;

  showSuccess() {
    this.toastr.success('', 'Você está logado!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o seu login!');
  }

  public onSubmit() {
    if (this.postUser.invalid) {
      return
    }
    this.Usuario = { ...this.postUser.value } as Usuario;
    this.usuarioService.login(this.Usuario).subscribe(
      login => {
        if (login && login.access_token) {
          window.localStorage.setItem('token', login.access_token)
          window.localStorage.setItem('id_cliente', login.data.id_cliente) // data 
          window.localStorage.setItem('isCliente', login.data.isCliente)
        }
        if (login.data.isCliente === false) {
          console.log(this.Usuario)
          this.showSuccess();
          this.router.navigate(['/Area-Admnistrativa'])
        }
        else {
          console.log(this.Usuario)
          this.showSuccess();
          this.router.navigate(['/Estabelecimentos-Cliente', login.data.id_cliente])
        }
      },
      err => {
        this.showError();
      }
    )

  }
  public get cpf() {
    return this.postUser.get('cpf')!;
  }
  public get senha() {
    return this.postUser.get('senha')!;
  }

  ngOnInit(): void {
  }

}