import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/Interface/Cliente';
import { ClientesService } from 'src/Service/clientes.service';

@Component({
  selector: 'app-criar-clientes',
  templateUrl: './criar-clientes.component.html',
  styleUrls: ['./criar-clientes.css'
  ]
})
export class CriarClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  postCli = this.fb.group({

    nome: ['', Validators.required],
    cpf: ['', Validators.required],

  });

  public Cliente: Cliente = {} as Cliente;



  showSuccess() {
    this.toastr.success('', 'Cadastro realizado com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o Cadastro!');
  }


  addCliente() {
    if (this.postCli.invalid) {
      return
    }
    this.Cliente = { ... this.postCli.value } as Cliente;
    this.clienteService.postCliente(this.Cliente).subscribe(
      () => {
        this.showSuccess();
        this.router.navigate(['/Clientes']);
      },
      erro => {
        this.showError();
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Cliente)
  }

  ngOnInit(): void {
  }

  public get nome() {
    return this.postCli.get('nome')!;
  }
  public get cpf() {
    return this.postCli.get('cpf')!;
  }


}
