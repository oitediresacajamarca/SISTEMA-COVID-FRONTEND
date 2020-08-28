import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribucionAdministrativaService {

  constructor(private http: HttpClient) { }

  devolverMicroredPorRed(red: number) {
    return this.http.get<any>(environment.urlTalend + 'distritos/microredes/' + red)
  }
  devolverIpressPorMicrored(cod_microred: number) {
    return this.http.get<any>(environment.urlTalend + 'distritos/microred/' + cod_microred+'/ipress')


  }
}
