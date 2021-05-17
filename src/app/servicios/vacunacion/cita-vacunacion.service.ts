import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaVacunacionService {

  constructor(private http: HttpClient) { }

  citarPaciente(solicitud: any) {
    return this.http.post(environment.urlBackendNode+'vacunacion-cita/citar', solicitud)

  }

  devolverCitas(num_doc:string){

    return this.http.get(environment.urlBackendNode+'vacunacion-cita/citas/'+num_doc)
  }


}
