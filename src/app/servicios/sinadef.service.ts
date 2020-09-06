import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sinadef } from '../compartido/interfaces/sinadef';

@Injectable({
  providedIn: 'root'
})
export class SinadefService {

  constructor(private http: HttpClient) { }
  devolverSindefPorIdentificacion(TIPO_DOC:string,NUM_DOC:string) {

    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});
   
    var params = new HttpParams({fromObject:{'tipodoc': TIPO_DOC,'dni': NUM_DOC}})
    return this.http.get<Sinadef[]>(environment.urlBackendSiscovid + 'fichas/getsinadefpordocumento',{headers,params})
  }
}
