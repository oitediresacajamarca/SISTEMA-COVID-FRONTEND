import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }
  devolverPersonaPorIdentificacion(TIPO_DOC: string, NRO_DOCUMENTO: string) {

    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});
   
    var params = new HttpParams({fromObject:{'tipodoc': TIPO_DOC,'dni': NRO_DOCUMENTO}})
    return this.http.get(environment.urlBackendSiscovid + 'fichas/getpersonapordocumento',{headers,params})
  }

  devolverPersonaPorNombres(NOMBRES: string, APE_PATERNO: string,APE_MATERNO:string) {

    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});
   
    var params = new HttpParams({fromObject:{'nombres': '%'+NOMBRES+'%'+APE_PATERNO+'%'+APE_MATERNO+'%'}})

    return this.http.get<any[]>(environment.urlBackendSiscovid + 'fichas/getpersonapornombre',{headers,params})
  }

  devolverDatosGeneralesPersona(Nro_Documento:string) {

     
    return this.http.get<any>(environment.urlBackendNode + 'datos-generales/'+Nro_Documento)
  }
}
