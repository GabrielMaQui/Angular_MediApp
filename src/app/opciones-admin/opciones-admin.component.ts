import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-opciones-admin',
  standalone: true,
  imports: [],
  templateUrl: './opciones-admin.component.html',
  styleUrl: './opciones-admin.component.css'
})
export class OpcionesAdminComponent {
  constructor(private router: Router) {}

  navigateToListarProductos() {
    this.router.navigate(['/lista-productos']);
  }

  navigateToListarUsuarios() {
    this.router.navigate(['/listar-usuarios']);
  }

  navigateToListarPedidos(){
    this.router.navigate(['/listar-pedidos']);
  }

}
