import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-estabelecimentos.components.html',
  styleUrls: ['./listar-estabelecimentos.css'
  ]
})

export class ListarEstabelecimentosComponent implements OnInit {

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private estabelecimentoService: EstabelecimentosService, private toastr: ToastrService) { }

  public "estabelecimentos": Estabelecimento[];

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
        this.getEstabelecimentos();

      }
    );
  }

  ngOnInit(): void {
    this.getEstabelecimentos();
  }

}

