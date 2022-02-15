import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lenguaje } from 'src/app/publics/dtos/Lenguaje.dto';
import { LenguajeServiceService } from 'src/app/publics/services/lenguaje-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lenguajeForm: FormGroup;
  
  get lenguaje(){
    return this.lenguajeForm.controls;
  }

  constructor(private lenguajeService: LenguajeServiceService,
    private formBuilder: FormBuilder) { }

  lenguajes: Lenguaje[];

  obtenerNivelesAprendizaje(){
    let niveles: string[] = ["Bajo", "Medio", "Alto"];
    return niveles;
  }

  ngOnInit(): void {
    this.obtenerLenguajes();   
    
    this.lenguajeForm =  this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      ambito: ['', [Validators.required, Validators.maxLength(50)]],
      aprendizaje: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  obtenerLenguajes(): void{
    this.lenguajeService.listarLenguajes().subscribe( respuesta =>{
      this.lenguajes = respuesta.body;
    });  
  }

  test(): void{
    console.log("Desde el boton")
    console.log(this.lenguajes)
  }


  insertar(): void {
    this.lenguajeService.crearLenguaje(this.lenguajeForm.value).subscribe( respuesta => {
      console.log(respuesta);
      this.obtenerLenguajes();
      Swal.fire("Registrado", "Lenguaje registrado correctamente", "success");
    }, error =>{
      console.log(error);
      Swal.fire("Error", "Error al registrar", "error");
    });
  }

}
