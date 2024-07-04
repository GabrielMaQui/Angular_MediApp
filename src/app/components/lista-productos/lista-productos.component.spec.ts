import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosComponent } from './lista-productos.component';
import { Producto } from '../../models/producto.model';

describe('ListaProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;
  let producto:Producto;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
