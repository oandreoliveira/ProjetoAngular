import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Cliente } from 'src/Interface/Cliente';
import { Observable } from "rxjs/internal/Observable";



const apiUrl = "http://localhost:3000/cliente";

let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(apiUrl, httpHeaders);

  }

  getClienteById(id: any): Observable<Cliente> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Cliente>(url, httpHeaders);
  }

  postCliente(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(apiUrl, Cliente, httpHeaders);
  }

  putCliente(id: string, Cliente: Cliente): Observable<Cliente> {
    const url = `${apiUrl}/${id}`
    return this.http.put<Cliente>(url, Cliente, httpHeaders);
  }

  delCliente(id: string): Observable<Cliente> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Cliente>(url, httpHeaders);
  }


}
