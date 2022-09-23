import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/Interface/Categoria';
import { CategoriasService } from 'src/Service/categorias.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-categorias',
  templateUrl: './criar-categorias.coponent.html',
  styleUrls: ['./criar-categorias.css'
  ]
})
export class CriarCategoriasComponent implements OnInit {

  constructor(private categoriaService: CategoriasService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  postCat = this.fb.group({

    nome: ['', Validators.required]


  });

  showSuccess() {
    this.toastr.success('', 'Cadastro realizado com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o Cadastro!');
  }

  public Categoria: Categoria = {} as Categoria;

  addCategoria() {
    if (this.postCat.invalid) {
      return
    }
    this.Categoria = { ... this.postCat.value } as Categoria;
    this.categoriaService.postCategoria(this.Categoria).subscribe(
      () => {
        this.showSuccess();
        this.router.navigate(['/Categorias']);
      },
      erro => {
        this.showError()
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Categoria)
  }

  ngOnInit(): void {

  }

  public get nome() {
    return this.postCat.get('nome')!;
  }
  public get cpf() {
    return this.postCat.get('cpf')!;
  }


}

