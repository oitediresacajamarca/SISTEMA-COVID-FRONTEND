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

  devolver_cupos_por_fecha_punto(nombre_punto: string,fecha:string) {
    let consulta={
      nombre_punto:nombre_punto,
      fecha:fecha
    }
    return this.http.post<any[]>(environment.urlBackendNode + 'punto-programacion/fecha_punto/',consulta)
  }
}
