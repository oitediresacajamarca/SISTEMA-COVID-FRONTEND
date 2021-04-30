import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionDataService {

  constructor(
    private Http:HttpClient
  ) { }

  actualizarData(datos:any){
  return  this.Http.post<any>(environment.urlBackendNode+'vacunacion-cita/actualizar-data',datos)
  }
}
