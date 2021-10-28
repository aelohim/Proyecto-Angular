import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Componentes
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';

import { SharedModule } from './shared/shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  providers: [],
  exports: [
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
