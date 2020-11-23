import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private http: HttpClient) { }
  devolverMedicamentos(nro_documento: string, fecha : string) {
    
    if(nro_documento && fecha){
      var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
      var params = new HttpParams({fromObject:{'dni': nro_documento,'fecha': fecha }})
      return this.http.get(environment.urlBackendSiscovid + 'fichas/getmedicamentospordocumentofecha',{headers:headers, params:params })
  }
  }
}
