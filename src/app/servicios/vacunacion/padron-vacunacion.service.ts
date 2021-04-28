import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PadronVacunacionService {

  constructor(private http:HttpClient) { }

  devolverDatos(dni:string){

    return this.http.get<any>(environment.urlBackendNodeVacunas+'padron-vacunados/'+dni)

  }
}
