import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/Interface/Categoria';
import { Cliente } from 'src/Interface/Cliente';
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { CategoriasService } from 'src/Service/categorias.service';
import { ClientesService } from 'src/Service/clientes.service';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';

@Component({
  selector: 'app-editar-estabelecimentos',
  templateUrl: './editar-estabelecimentos.component.html',
  styleUrls: ['./editar-estabelecimentos.css'
  ]
})
export class EditarEstabelecimentosComponent implements OnInit {

  constructor(private estabelecimentoService: EstabelecimentosService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private categoriasService: CategoriasService,
    private clienteService: ClientesService, private toastr: ToastrService) { }

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
  public estabelecimento: Estabelecimento = {} as Estabelecimento;

  editaEstab = this.fb.group({
    id: ['', Validators.required],
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

  getEstabelecimentoId() {
    this.estabelecimentoService.getEstabelecimentoById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      estab => {
        this.estabelecimento = { ...estab } as Estabelecimento
        this.editaEstab.patchValue(this.estabelecimento)
        console.log(JSON.stringify(this.estabelecimento))

      },
      err => {
        console.log('Não foi possivel localizar o Estabelecimento')
      }
    )
  }


  showSuccess() {
    this.toastr.success('', 'Atualização realizada com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a Atualização!');
  }

  editaEstabelecimento() {
    if (this.editaEstab.invalid) {
      return
    }

    this.estabelecimento = { ... this.editaEstab.value } as Estabelecimento

    this.estabelecimentoService.putEstabelecimento(this.estabelecimento.id, this.estabelecimento).subscribe(
      estab => {
        this.showSuccess();
        this.router.navigate(['/Estabelecimentos'])
      },
      err => {
        this.showError();
        console.log('Erro')
      })

  }

  ngOnInit(): void {
    this.getEstabelecimentoId();
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
    return this.editaEstab.get('nome')!;
  }
  public get cnpj() {
    return this.editaEstab.get('cnpj')!;
  }
  public get descricao() {
    return this.editaEstab.get('descricao')!;
  }
  public get endereco() {
    return this.editaEstab.get('endereco')!;
  }
  public get telefone() {
    return this.editaEstab.get('telefone')!;
  }
  public get email() {
    return this.editaEstab.get('email')!;
  }
  public get imagem() {
    return this.editaEstab.get('imagem')!;
  }
  public get id_categoria() {
    return this.editaEstab.get('id_categoria')!;
  }
  public get id_cliente() {
    return this.editaEstab.get('id_cliente')!;
  }
}

