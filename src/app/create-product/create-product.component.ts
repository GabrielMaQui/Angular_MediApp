import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  producto = {
    nombreProducto: '',
    descripcion: '',
    precio: 0,
    cantidadStock: 0,
    imagen: '',
    marca: '',
    categoria: {
      codigoCategoria: 2
    }
  };
  constructor(private productoService: ProductoService, private router: Router) {}
  onSubmit() {
    this.productoService.addProducto(this.producto).subscribe(data => {
      console.log(data);
      this.router.navigate(['/lista-productos']);
    });
  }


}
