import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EquipoCovid } from '../compartido/interfaces/equipo-covid';

@Injectable({
  providedIn: 'root'
})
export class EquiposCovidService {

  constructor(private http: HttpClient) { }
  guardarEquipo(equipo: any) {
    equipo.cod_establecimiento = '4520'
    equipo.estado='A'
  equipo.seguimientos_realizados=0
    return this.http.post(environment.urlBackendNode + 'equipo-covid/nuevo', equipo)
  }

  devolverEquipos(cod_ipress:string){
    return this.http.get<EquipoCovid[]>(environment.urlBackendNode+'equipo-covid/devolverequipos/'+cod_ipress)
  }
}
