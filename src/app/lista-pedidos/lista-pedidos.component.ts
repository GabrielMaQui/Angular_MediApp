import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido.model';
import { PedidoService } from '../services/pedido.service';
import { EstadoEntrega } from '../models/estado_entrega.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './lista-pedidos.component.html',
  styleUrl: './lista-pedidos.component.css'
})
export class ListaPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  estadosEntrega: EstadoEntrega[] = [
    { codEstEnt: 1, nombreEstado: 'Pendiente' },
    { codEstEnt: 2, nombreEstado: 'Entregado' },
    { codEstEnt: 3, nombreEstado: 'Cancelado' }
  ];
  selectedEstado: { [key: number]: number } = {};
  constructor(private pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe(
      (data: Pedido[]) => {
        this.pedidos = data;
      },
      (error) => {
        console.error('Error fetching pedidos:', error);
      }
    );
  }

  seleccionarEstado(pedidoId: number, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const nuevoEstadoCod = Number(target.value);
    this.selectedEstado[pedidoId] = nuevoEstadoCod;
  }

  cambiarEstadoPedido(pedido: Pedido) : void {
    const nuevoEstadoCod = this.selectedEstado[pedido.codPedCab];
    const nuevoEstado = this.estadosEntrega.find(estado => estado.codEstEnt === nuevoEstadoCod);
  
    if (nuevoEstado) {
      this.pedidoService.actualizarEstadoPedido(pedido, nuevoEstado).subscribe(
        (updatedPedido: Pedido) => {
          const index = this.pedidos.findIndex(p => p.codPedCab === updatedPedido.codPedCab);
          if (index !== -1) {
            this.pedidos[index] = updatedPedido;
          }
        },
        (error) => {
          console.error('Error updating estadoEntrega:', error);
        }
      );
    }
  }

  navigateToMenu() {
    this.router.navigate(['opciones']);
  }


}
