import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { OpcionesAdminComponent } from './opciones-admin/opciones-admin.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginAdminComponent },
    { path: 'opciones', component: OpcionesAdminComponent },
    { path: 'listar-usuarios', component: ListaUsuariosComponent},
    { path: 'editar-producto/:id', component: EditarProductoComponent},
    { path: 'lista-productos',component: ListaProductosComponent},
    { path: 'agregar-producto', component: CreateProductComponent},
    {path: 'listar-pedidos', component: ListaPedidosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
