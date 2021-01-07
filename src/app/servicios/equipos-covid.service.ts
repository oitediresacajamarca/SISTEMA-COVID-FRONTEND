import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipo } from '../compartido/interfaces/equipo';
import { EquipoCovid } from '../compartido/interfaces/equipo-covid';
import { EquipoMiembro } from '../compartido/interfaces/equipoMiembro';
import { MiembroDetalle } from '../compartido/interfaces/miembroDetalle';

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


  getEquipos() {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});   
  return this.http.get<Equipo[]>(environment.urlBackendSiscovid+'equipos/getall',{headers})
  }

  AddEquipos(equipo : Equipo) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});   
    return this.http.post<Equipo[]>(environment.urlBackendSiscovid+'equipos/add',equipo,{headers})
  }

  UpdateEquipos(equipo : Equipo) {
    console.log("update equipo")
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});   
    return this.http.put<Equipo[]>(environment.urlBackendSiscovid+'equipos/update',equipo,{headers})
  }

  DeleteEquipos(equipo : Equipo) {
    console.log("update equipo")
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret}); 
    equipo.flg_activo = false; 
    return this.http.put<Equipo[]>(environment.urlBackendSiscovid+'equipos/update',equipo,{headers})
  }


  getMiembros(id_equipo: number) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{idEquipo: id_equipo.toString()}}) 
    return this.http.get<EquipoMiembro[]>(environment.urlBackendSiscovid+'equipos/integrantes',{headers,params})
  }

  getMiembroId(id_miembro: number) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{idMiembro: id_miembro.toString()}}) 
    return this.http.get<EquipoMiembro>(environment.urlBackendSiscovid+'equipos/getIntegranteId',{headers,params})
  }

  AddMiembro(miembro: EquipoMiembro){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});   
    return this.http.post<EquipoMiembro>(environment.urlBackendSiscovid+'equipos/addIntegrante',miembro,{headers})
  }

  UpdateMiembro(miembro: EquipoMiembro){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});   
    return this.http.put<EquipoMiembro>(environment.urlBackendSiscovid+'equipos/updateIntegrante',miembro,{headers})
  }

  DeleteMiembro(miembro: EquipoMiembro){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    miembro.flg_activo = false;
    return this.http.put<EquipoMiembro>(environment.urlBackendSiscovid+'equipos/updateIntegrante',miembro,{headers})
  }

  getSeguimientos(idMiembro: number) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{idMiembro: idMiembro.toString()}}) 
    return this.http.get<MiembroDetalle[]>(environment.urlBackendSiscovid+'equipos/getSeguimientos',{headers,params})
  }

  AddSeguimiento(detalle: MiembroDetalle){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});   
    return this.http.post<MiembroDetalle>(environment.urlBackendSiscovid+'equipos/addseguimiento',detalle,{headers})
  }

  DeleteSeguimientos(id_detalle: number) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{idDetalle: id_detalle.toString()}}) 
    return this.http.delete<MiembroDetalle>(environment.urlBackendSiscovid+'equipos/deleteseguimiento',{headers,params})
  }


}
