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


}
