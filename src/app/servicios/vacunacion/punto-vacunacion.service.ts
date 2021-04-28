import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PuntoVacunacionService {

  constructor(private http:HttpClient) { }

  devolverPuntosPorDistrito(distrito:string){

    return this.http.get<any[]>(environment.urlBackendNode+'punto-vacunacion/'+distrito)

  }
}
