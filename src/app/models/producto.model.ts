import { Categoria } from "./categoria.model";


export interface Producto {
  codigoProducto: number;
  nombreProducto: string;
  descripcion: string;
  precio: number;
  cantidadStock: number;
  imagen: string;
  marca: string;
  categoria: Categoria; // usa la interfaz de categoría aquí
}
