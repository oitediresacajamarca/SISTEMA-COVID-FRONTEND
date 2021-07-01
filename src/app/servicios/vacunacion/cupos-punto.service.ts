import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuposPuntoService {

  constructor(private http: HttpClient) { }

  devolver_cupos_disponibles(nombre_punto: string) {
    return this.http.get<any[]>(environment.urlBackendNode + 'cupos-disponibles/punto/' + nombre_punto)
  }
  devolver_fechas_disponibles(nombre_punto: string) {
    return this.http.get<any[]>(environment.urlBackendNode + 'punto-programacion/punto/' + nombre_punto)
  }
}
