import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/Interface/Usuario';


let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
const apiUrl = "http://localhost:3000/login";
const apiUrl2 = "http://localhost:3000/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getAuthToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getAuthisCliente() {
    const tokenisCliente = window.localStorage.getItem('isCliente');
    return tokenisCliente;
  }

  getAuthid_cliente() {
    const tokenid_cliente = window.localStorage.getItem('id_cliente');
    return tokenid_cliente;
  }



  public login(user: any): Observable<any> {
    return this.http.post<any>(`${apiUrl}`, user);
  }


  postUsuario(Usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(apiUrl2, Usuario, httpHeaders);
  }

  isUserLoggedInCliente(): boolean {
    const token = this.getAuthToken();
    const tokenisCliente = this.getAuthisCliente();

    if (token && tokenisCliente == 'false') {
      return true;
    }
    return false
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthToken();


    if (token) {
      return true;
    }
    return false
  }


}
