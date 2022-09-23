import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/Interface/Categoria';
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { CategoriasService } from 'src/Service/categorias.service';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';

@Component({
  selector: 'app-detalhar-estabelecimento',
  templateUrl: './detalhar-estabelecimento.component.html',
  styleUrls: ['./detalhar-estabelecimento.css'
  ]
})
export class DetalharEstabelecimentoComponent implements OnInit {

  constructor(private estabelecimentoService: EstabelecimentosService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private categoriasService: CategoriasService) { }

  public estabelecimento: Estabelecimento = {} as Estabelecimento;
  public categoria: Categoria = {} as Categoria;

  getEstabelecimentoId() {
    this.estabelecimentoService.getEstabelecimentoById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      estab => {
        this.estabelecimento = { ...estab } as Estabelecimento
        console.log(JSON.stringify(this.estabelecimento))

      },
      err => {
        console.log('Não foi possivel localizar o Estabelecimento')
      }
    )
  }
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




  ngOnInit(): void {
    this.getEstabelecimentoId();
    this.getCategorias()
  }


}
