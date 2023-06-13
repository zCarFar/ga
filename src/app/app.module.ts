import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioComponent } from './inventario/inventario/inventario.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PagosComponent } from './pagos/pagos/pagos.component';
import { AgregarCategoriaComponent } from './agregar_categoria/agregar-categoria/agregar-categoria.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { AgregarProductoComponent } from './agregar_producto/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductosComponent,
    InventarioComponent,
    CategoriaComponent,
    PagosComponent,
    AgregarCategoriaComponent,
    InicioComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
