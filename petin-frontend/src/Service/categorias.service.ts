import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

import { Observable } from "rxjs/internal/Observable";
import { Categoria } from 'src/Interface/Categoria';


const apiUrl = "http://localhost:3000/categoria";

let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(apiUrl, httpHeaders);

  }

  getCategoriaById(id: any): Observable<Categoria> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Categoria>(url, httpHeaders);
  }

  postCategoria(Categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(apiUrl, Categoria, httpHeaders);
  }

  putCategoria(id: string, Categoria: Categoria): Observable<Categoria> {
    const url = `${apiUrl}/${id}`
    return this.http.put<Categoria>(url, Categoria, httpHeaders);
  }

  delCategoria(id: string): Observable<Categoria> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Categoria>(url, httpHeaders);
  }


}
