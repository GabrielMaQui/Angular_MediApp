import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit{
  productoForm: FormGroup;
  id: any;
  producto: any;
  categorias = [
    { codigoCategoria: '1', nombreCategoria: 'Pastillas' },
    { codigoCategoria: '2', nombreCategoria: 'Belleza' }
    
  ];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      nombreProducto: ['', Validators.required],
      marca: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      codigoCategoria: ['', Validators.required],
      cantidadStock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(this.id).subscribe(data => {
      this.producto = data;
      console.log(this.producto);
      this.productoForm.patchValue(data);
  });
}
onGuardar(): void {
  if (this.productoForm.valid) {
    const formValues = this.productoForm.value;
      const productoData = {
        ...formValues,
        categoria: {
          codigoCategoria: formValues.codigoCategoria,
        }
      };
      this.productoService.updateProducto(this.id, productoData).subscribe(() => {
        this.router.navigate(['/lista-productos']);
      });
  }
}

onRegresar(): void {
  this.router.navigate(['/lista-productos']);
}

}
