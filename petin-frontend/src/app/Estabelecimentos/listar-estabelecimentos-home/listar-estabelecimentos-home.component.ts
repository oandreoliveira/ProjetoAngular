import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/Interface/Categoria';
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { CategoriasService } from 'src/Service/categorias.service';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';

@Component({
  selector: 'app-listar-estabelecimentos-home',
  templateUrl: './listar-estabelecimentos-home.html',
  styleUrls: ['./listar-estabelecimentos-home.css'
  ]
})
export class ListarEstabelecimentosHomeComponent implements OnInit {

  constructor(private estabelecimentoService: EstabelecimentosService, private categoriasService: CategoriasService) { }


  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



  public "estabelecimentos": Estabelecimento[];
  public "categorias": Categoria[];

  public getCategorias() {
    this.categoriasService.getCategorias()
      .subscribe(
        categorias => {
          this.categorias = categorias
          console.log(categorias)
        },
        error => { console.log(error) }
      )

  }

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.estabelecimentos = this.estabelecimentos.filter(
      categoria => {
        return categoria.nome.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getEstabelecimentos()
  }


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

  ngOnInit(): void {
    this.getEstabelecimentos();
    this.getCategorias();

  }



}