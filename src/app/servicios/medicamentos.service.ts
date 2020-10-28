import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private http: HttpClient) { }
  devolverMedicamentos(nro_documento: string,fecha:string) {
    console.log(fecha)
    return this.http.get(environment.urlBackendNode + 'medicamentos/' + nro_documento+'/'+fecha)
  }
}
