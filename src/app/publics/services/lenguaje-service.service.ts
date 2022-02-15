import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lenguaje } from '../dtos/Lenguaje.dto';
import { Response } from '../dtos/Response.dto';

@Injectable({
  providedIn: 'root'
})
export class LenguajeServiceService {

  constructor(private httpClient: HttpClient) { }

  // crear la variable string con la direccion de comunicacion al servicio web de listarLenguajesEn esta entrega se pondrá en práctica el método matemático de optimización, que permite representar modelos lineales para minimizar o maximizar ganancias en diferentes áreas de una organización
  private host: string = "http://localhost:8084"
  private apiVersion: string = "/api/v1"
  private baseUrl: string = `${this.host}${this.apiVersion}`; // "http://localhost:8084/api/v1"
  
  // "http://localhost:8084/api/v1/lenguajes"
  listarLenguajes(): Observable<Response<Lenguaje[]>>{
    return this.httpClient.get<Response<Lenguaje[]>>(`${this.baseUrl}/lenguajes`);
  }


  crearLenguaje(lenguaje: Lenguaje): Observable<Response<Lenguaje>>{
    return this.httpClient.post<Response<Lenguaje>>(`${this.baseUrl}/lenguaje`, lenguaje);
  }

}
