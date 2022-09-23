import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/Interface/Cliente';
import { Usuario } from 'src/Interface/Usuario';
import { ClientesService } from 'src/Service/clientes.service';
import { UsuarioService } from 'src/Service/usuario.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.css']
})

export class CriarContaComponent implements OnInit {


  constructor(private usuarioService: UsuarioService, private router: Router, private fb: FormBuilder, private clienteService: ClientesService) { }


  public "clientes": Cliente[];

  public getClientes() {
    this.clienteService.getClientes()
      .subscribe(
        clientes => {
          this.clientes = clientes
          console.log(clientes)
        },
        error => { console.log(error) }
      )

  }
  postUser = this.fb.group({
    cpf: ['', Validators.required],
    senha: ['', Validators.required],
    id_cliente: ['', Validators.required]

  });

  public Usuario: Usuario = {} as Usuario;

  addUsuario() {
    if (this.postUser.invalid) {
      return
    }
    this.Usuario = { ... this.postUser.value } as Usuario;
    this.usuarioService.postUsuario(this.Usuario).subscribe(
      () => {
        this.router.navigate(['/Area-Admnistrativa']);
      },
      erro => {
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Usuario)
  }



  ngOnInit(): void {
    this.getClientes();
  }

  public get cpf() {
    return this.postUser.get('cpf')!;
  }
  public get senha() {
    return this.postUser.get('senha')!;
  }
  public get id_cliente() {
    return this.postUser.get('id_cliente')!;
  }
}
