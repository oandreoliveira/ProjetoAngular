import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/Interface/Cliente';
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { ClientesService } from 'src/Service/clientes.service';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estabelecimentos-cliente',
  templateUrl: './estabelecimentos-cliente.component.html',
  styleUrls: ['./estabelecimentos-cliente.css'
  ]
})

export class EstabelecimentosClienteComponent implements OnInit {

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private estabelecimentoService: EstabelecimentosService, private toastr: ToastrService,
    private clienteService: ClientesService, private ActivatedRoute: ActivatedRoute,) { }

  public "estabelecimentos": Estabelecimento[];
  public cliente: Cliente = {} as Cliente;

  public getEstabelecimentos() {
    this.estabelecimentoService.getEstabelecimentos()
      .subscribe(
        Estabelecimento => {
          this.estabelecimentos = Estabelecimento
          console.log(Estabelecimento)
        },
        error => { console.log(error) }
      )

  }

  getClienteId() {
    this.clienteService.getClienteById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      cli => {
        this.cliente = { ...cli } as Cliente
        console.log(JSON.stringify(this.cliente))

      },
      err => {
        console.log('Não foi possivel localizar o Cliente')
      }
    )
  }

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.estabelecimentos = this.estabelecimentos.filter(
      estabelecimento => {
        return estabelecimento.nome.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getEstabelecimentos()
  }

  showSuccess() {
    this.toastr.success('', 'Excluído com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a Exclusão!');
  }

  public delEstabelecimento(id: string) {
    this.estabelecimentoService.delEstabelecimento(id).subscribe(
      () => {
        this.showSuccess();
        this.getClienteId();


      }
    );
  }

  ngOnInit(): void {
    this.getClienteId();
  }

}


