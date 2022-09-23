import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/Interface/Cliente';
import { ClientesService } from 'src/Service/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.css'
  ]
})

export class ListarClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService, private toastr: ToastrService) { }

  public "clientes": Cliente[];

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.clientes = this.clientes.filter(
      cliente => {
        return cliente.nome.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getClientes()
  }

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
  showSuccess() {
    this.toastr.success('', 'Excluído com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a Exclusão!');
  }

  public delClientes(id: string) {
    this.clienteService.delCliente(id).subscribe(
      () => {
        this.showSuccess();
        this.getClientes();

      }
    );
  }

  ngOnInit(): void {
    this.getClientes();
  }

}
