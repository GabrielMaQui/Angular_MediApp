import { Producto } from './producto.model';
export interface DetallesPedido {
    secDet: number;
    cantidad: number;
    subtotal: number;
    producto: Producto;
  }
  