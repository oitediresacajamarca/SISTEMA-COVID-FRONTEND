import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Establecimiento } from '../compartido/interfaces/establecimiento';

@Injectable({
  providedIn: 'root'
})
export class FiltrosGeograficosService {

  constructor(private http: HttpClient) { }

  getProvincias() {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    //var params = new HttpParams({fromObject:{idEquipo: id_equipo.toString()}}) 
    return this.http.get<string[]>(environment.urlBackendSiscovid+'public/getprovincias',{headers})
  }

  getDistritos(provincia : string) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{provincia: provincia}}) 
    return this.http.get<string[]>(environment.urlBackendSiscovid+'public/getdistritos',{headers,params})
  }

  getEstablecimientos(provincia : string, distrito : string) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{provincia: provincia, distrito: distrito}}) 
    return this.http.get<Establecimiento[]>(environment.urlBackendSiscovid+'public/getestablecimientos',{headers,params})
  }



}
