import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/Interface/Categoria';
import { CategoriasService } from 'src/Service/categorias.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.css'
  ]
})
export class EditarCategoriasComponent implements OnInit {


  constructor(private categoriaService: CategoriasService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  public categoria: Categoria = {} as Categoria;

  editaCat = this.fb.group({
    id: ['', Validators.required],
    nome: ['', Validators.required],
    isAtivo: [true, Validators.required]
  });

  getCategoriaId() {
    this.categoriaService.getCategoriaById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      cat => {
        this.categoria = { ...cat } as Categoria
        this.editaCat.patchValue(this.categoria)
        console.log(JSON.stringify(this.categoria))

      },
      err => {
        console.log('Não foi possivel localizar a Categoria')
      }
    )
  }

  showSuccess() {
    this.toastr.success('', 'Atualização realizada com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a atualização!');
  }


  editaCategoria() {
    if (this.editaCat.invalid) {
      return
    }

    this.categoria = { ... this.editaCat.value } as Categoria

    this.categoriaService.putCategoria(this.categoria.id, this.categoria).subscribe(
      cat => {
        this.showSuccess();
        this.router.navigate(['/Categorias'])
      },
      err => {
        this.showError();
        console.log('Erro')
      })

  }

  ngOnInit(): void {
    this.getCategoriaId();
  }

  public get nome() {
    return this.editaCat.get('nome')!;
  }

}
