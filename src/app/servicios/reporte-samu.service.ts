import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReporteSamu } from '../compartido/interfaces/reporteSamu';

@Injectable({
  providedIn: 'root'
})
export class ReporteSamuService {

  constructor(private http: HttpClient) { }

  getReporteSamu(provinciaSel : string, distritoSel : string, establecimientoSel: string, fechaDesde: string, fechaHasta: string ) {

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{provinciaSel: provinciaSel, distritoSel: distritoSel, establecimientoSel:establecimientoSel, fechaDesde: fechaDesde, fechaHasta: fechaHasta }}) 
    return this.http.get<ReporteSamu[]>(environment.urlBackendSiscovid+'fichas/getreportesamu',{headers,params})
  }
}
