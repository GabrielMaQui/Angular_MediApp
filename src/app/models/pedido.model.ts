import { Usuario } from './usuario.model';
import { DetallesPedido } from './pedidoDetalle.model';
import { EstadoEntrega } from './estado_entrega.model';


export interface Pedido {
    codPedCab: number;
    usuario: Usuario;
    fecha: string;
    precioTotal: number;
    esConReceta: boolean;
    fotoReceta: string;
    direccionEntrega: string;
    direccionReferencia: string;
    estadoEntrega: EstadoEntrega;
    detalles: DetallesPedido[];
  }