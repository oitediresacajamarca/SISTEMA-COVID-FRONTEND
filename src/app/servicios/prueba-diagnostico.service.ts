import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PruebaDiagnostico } from '../compartido/interfaces/pruebaDiagnostico';

@Injectable({
  providedIn: 'root'
})
export class PruebaDiagnosticoService {

  constructor(private http: HttpClient) {
    
   }
   public devolverPruebasDni(dni : string){
    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});
    var params = new HttpParams({fromObject:{'dni': dni}})
    return this.http.get<PruebaDiagnostico[]>(environment.urlBackendSiscovid+'fichas/getpruebasantigenasdni',{headers,params})
      
  }
}
