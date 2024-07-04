import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addProducto(producto: any){
    return this.http.post(this.apiUrl, producto);
  }

  updateProducto(id: number, producto: any){
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }
}