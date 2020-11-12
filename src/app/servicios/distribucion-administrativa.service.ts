import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SubRegion } from '../compartido/interfaces/subregion';
import { Red } from '../compartido/interfaces/Red';
import { MicroRed } from '../compartido/interfaces/microred';
import { Ipress } from '../compartido/interfaces/ipress';

@Injectable({
  providedIn: 'root'
})
export class DistribucionAdministrativaService {

  headers : HttpHeaders
  constructor(private http: HttpClient) { }

  devolverMicroredPorRed(red: number, tipo_ambito : string, codigo_ambito : string) {
    return this.devolverMicroRedAmbito(tipo_ambito,codigo_ambito);
  }
  devolverIpressPorMicrored(cod_microred: number,tipo_ambito : string, codigo_ambito : string) {
    return this.devolverIpressAmbito(tipo_ambito, codigo_ambito);
  }

  devolverSubRegionAmbito(tipo_ambito : string, codigo_ambito: string){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret}); 
    var params = new HttpParams({fromObject:{'clase': 'ADM','tipoambito': tipo_ambito, 'codigoambito':codigo_ambito}})
  
    return this.http.get<SubRegion[]>(`${environment.urlBackendSiscovid}fichas/getsubregionambito`, {headers, params});
  }

  devolverRedAmbito(tipo_ambito : string, codigo_ambito: string){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret}); 
    var params = new HttpParams({fromObject:{'clase': 'ADM','tipoambito': tipo_ambito, 'codigoambito':codigo_ambito}})
    return this.http.get<Red[]>(`${environment.urlBackendSiscovid}fichas/getredambito`, {headers, params});
  }

  devolverMicroRedAmbito(tipo_ambito : string, codigo_ambito: string){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret}); 
    var params = new HttpParams({fromObject:{'clase': 'ADM','tipoambito': tipo_ambito, 'codigoambito':codigo_ambito}})
    return this.http.get<MicroRed[]>(`${environment.urlBackendSiscovid}fichas/getmicroredambito`, {headers, params});
  }

  devolverIpressAmbito(tipo_ambito : string, codigo_ambito: string){
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret}); 
    var params = new HttpParams({fromObject:{'clase': 'ADM','tipoambito': tipo_ambito, 'codigoambito':codigo_ambito}})
    return this.http.get<Ipress[]>(`${environment.urlBackendSiscovid}fichas/getipressambito`, {headers, params});
  }

}
