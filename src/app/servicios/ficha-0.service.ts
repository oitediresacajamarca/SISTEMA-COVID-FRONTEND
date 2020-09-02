import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ficha00 } from '../compartido/interfaces/ficha_00';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Ficha0Service {

  DatosEjemplo: Ficha00[] = [
    {
    }


  ]

  constructor(private http: HttpClient) { }

  devolverFicha0PorIdentificacion(TIPO_DOC: string, NUM_DOC: string) {

    var headers = new HttpHeaders({ client_id: 'diresa_seguimiento', client_secret: 'WrCcm69SZOVZpUpnYuq4' });
    var params = new HttpParams({ fromObject: { 'tipodoc': TIPO_DOC, dni: NUM_DOC } })
    return this.http.get<Ficha00[]>(environment.urlBackendSiscovid + 'fichas/getficha00pordocumento', { headers, params })
  }
}
