import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[] = [];
  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  updateProducto(producto: any) {
   this.router.navigate(['editar-producto', producto.codigoProducto]);
  }

  navigateToCreateProduct() {
    this.router.navigate(['agregar-producto']);
  }

  navigateToMenu() {
    this.router.navigate(['opciones']);
  }





  
}

