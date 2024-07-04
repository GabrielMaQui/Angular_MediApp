import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/v1/usuarios'; 

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  bloquearUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${usuario.codigoUsuario}`;
    const updatedUser = { ...usuario, esBloqueado: true };
    return this.http.put<Usuario>(url, updatedUser);
  }

  desbloquearUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${usuario.codigoUsuario}`;
    const updatedUser = { ...usuario, esBloqueado: false };
    return this.http.put<Usuario>(url, updatedUser);
  }
}
