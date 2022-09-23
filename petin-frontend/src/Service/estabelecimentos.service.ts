import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Estabelecimento } from 'src/Interface/Estabelecimento';
import { Observable } from "rxjs/internal/Observable";



const apiUrl = "http://localhost:3000/estabelecimento";
let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})

export class EstabelecimentosService {

  constructor(private http: HttpClient) { }

  getEstabelecimentos(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(apiUrl, httpHeaders);

  }

  getEstabelecimentoById(id: any): Observable<Estabelecimento> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Estabelecimento>(url, httpHeaders);
  }

  postEstabelecimento(Estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(apiUrl, Estabelecimento, httpHeaders);
  }

  putEstabelecimento(id: string, Estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    const url = `${apiUrl}/${id}`
    return this.http.put<Estabelecimento>(url, Estabelecimento, httpHeaders);
  }

  delEstabelecimento(id: string): Observable<Estabelecimento> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Estabelecimento>(url);
  }




}
