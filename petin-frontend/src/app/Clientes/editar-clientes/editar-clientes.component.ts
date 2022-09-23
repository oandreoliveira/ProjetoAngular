import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/Interface/Cliente';
import { ClientesService } from 'src/Service/clientes.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.css'
  ]
})
export class EditarClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  public cliente: Cliente = {} as Cliente;

  editaCli = this.fb.group({
    id: ['', Validators.required],
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    isAtivo: [true, Validators.required]
  });

  showSuccess() {
    this.toastr.success('', 'Atualização realizada com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a atualização!');
  }


  getClienteId() {
    this.clienteService.getClienteById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      cli => {
        this.cliente = { ...cli } as Cliente
        this.editaCli.patchValue(this.cliente)
        console.log(JSON.stringify(this.cliente))

      },
      err => {
        console.log('Não foi possivel localizar o Cliente')
      }
    )
  }

  editaCliente() {
    if (this.editaCli.invalid) {
      return
    }

    this.cliente = { ... this.editaCli.value } as Cliente

    this.clienteService.putCliente(this.cliente.id, this.cliente).subscribe(
      cli => {
        this.showSuccess();
        this.router.navigate(['/Clientes'])
      },
      err => {
        this.showError();
        console.log('Erro')
      })

  }

  ngOnInit(): void {
    this.getClienteId();
  }

  public get nome() {
    return this.editaCli.get('nome')!;
  }
  public get cpf() {
    return this.editaCli.get('cpf')!;
  }

}
