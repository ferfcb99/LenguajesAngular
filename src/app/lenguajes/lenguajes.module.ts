import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    ActualizarComponent
  ],
  exports: [
    ListarComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LenguajesModule { }
