import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido} from '../models/pedido.model';
import { EstadoEntrega } from '../models/estado_entrega.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080/pedidos'; 

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  actualizarEstadoPedido(pedido: Pedido, nuevoEstado: EstadoEntrega): Observable<Pedido> {
    const url = `${this.apiUrl}/${pedido.codPedCab}`;
    const updatedPedido = { ...pedido, estadoEntrega: nuevoEstado };
    return this.http.put<Pedido>(url, updatedPedido);
  }
}
