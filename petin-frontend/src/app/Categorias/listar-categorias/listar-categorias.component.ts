import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/Interface/Categoria';
import { CategoriasService } from 'src/Service/categorias.service';



@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.css'
  ]
})
export class ListarCategoriasComponent implements OnInit {

  constructor(private categoriasService: CategoriasService, private toastr: ToastrService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  public "categorias": Categoria[];

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

    this.categorias = this.categorias.filter(
      categoria => {
        return categoria.nome.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getCategorias()
  }

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

  showSuccess() {
    this.toastr.success('', 'Excluído com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a Exclusão!');
  }

  public delCategorias(id: string) {
    this.categoriasService.delCategoria(id).subscribe(
      () => {
        this.showSuccess();
        this.getCategorias();
      });
  }

  ngOnInit(): void {
    this.getCategorias();

  }

}
