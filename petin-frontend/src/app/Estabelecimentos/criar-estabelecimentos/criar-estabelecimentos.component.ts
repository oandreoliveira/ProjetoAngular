import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/Interface/Categoria';
import { Cliente } from 'src/Interface/Cliente';
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { CategoriasService } from 'src/Service/categorias.service';
import { ClientesService } from 'src/Service/clientes.service';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';

@Component({
  selector: 'app-criar-estabelecimentos',
  templateUrl: './criar-estabelecimentos.component.html',
  styleUrls: ['./criar-estabelecimento.css'
  ]
})
export class CriarEstabelecimentosComponent implements OnInit {

  constructor(private estabelecimentoService: EstabelecimentosService, private router: Router, private fb: FormBuilder,
    private categoriasService: CategoriasService, private clienteService: ClientesService, private toastr: ToastrService) { }
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

  public "clientes": Cliente[];


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
  postEstab = this.fb.group({
    // id: ['', Validators.required],
    nome: ['', Validators.required],
    cnpj: ['', Validators.required],
    descricao: ['', Validators.required],
    endereco: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required],
    imagem: ['', Validators.required],
    isAtivo: [true, Validators.required],
    id_categoria: ['', Validators.required],
    id_cliente: ['', Validators.required]

  });

  public Estabelecimento: Estabelecimento = {} as Estabelecimento;



  showSuccess() {
    this.toastr.success('', 'Cadastro realizado com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o Cadastro!');
  }

  addEstabelecimento() {
    if (this.postEstab.invalid) {
      return
    }
    this.Estabelecimento = { ... this.postEstab.value } as Estabelecimento;
    this.estabelecimentoService.postEstabelecimento(this.Estabelecimento).subscribe(
      () => {
        this.showSuccess();
        this.router.navigate(['/Estabelecimentos']);
      },
      erro => {
        this.showError();
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Estabelecimento)
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getClientes();
  }

  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public get nome() {
    return this.postEstab.get('nome')!;
  }
  public get cnpj() {
    return this.postEstab.get('cnpj')!;
  }
  public get descricao() {
    return this.postEstab.get('descricao')!;
  }
  public get endereco() {
    return this.postEstab.get('endereco')!;
  }
  public get telefone() {
    return this.postEstab.get('telefone')!;
  }
  public get email() {
    return this.postEstab.get('email')!;
  }
  public get imagem() {
    return this.postEstab.get('imagem')!;
  }
  public get id_categoria() {
    return this.postEstab.get('id_categoria')!;
  }
  public get id_cliente() {
    return this.postEstab.get('id_cliente')!;
  }

}

