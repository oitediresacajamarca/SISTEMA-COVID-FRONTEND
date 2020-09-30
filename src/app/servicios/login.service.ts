import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { eventNames } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(user: string, password: string) {

    let url = 'http://sir.diresacajamarca.gob.pe/dir_autenticacion/token'
    let dato = {
      grant_type: 'password',
      username: user,
      password: password
    }

    const body = new HttpParams().set('grant_type', 'password')
      .set('username', user)
      .set('password', password);

    return this.http.post<any>(url, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })


  }

  devolverUsuario() {
    let token = localStorage.getItem('ACCESS_TOKEN')

    let headers = new HttpHeaders({Authorization:'Bearer ' + token});  

    return this.http.get(environment.urlBackendSiscovid + 'accesos/obtenerPersonaUsuario',{headers})
  }


}
