import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Contactos } from '../compartido/interfaces/contactos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  DatosEjemplos: Contactos[] = [{

    "id": 1.276440000000000e+005,
    "id_ficha": 1.901567000000000e+006,
    "caso": "VASQUEZ CARUAJULCA JULIA",
    "dniCaso": 8.041579600000000e+007,
    "fecha_inv": "2020-08-20",
    "tipodoc": "DNI",
    "dni": 7.924512600000000e+007,
    "nombres": "BAUTISTA CRUZADO JHEREMY JHAREL",
    "edad": 5.000000000000000e+000,
    "tipo_edad": "AÑOS",
    "sexo": "MASCULINO",
    "telefono": 9.871778720000000e+008,
    "direccion": "JR. AMAZONAS 264",
    "departamento": "CAJAMARCA",
    "provincia": "HUALGAYOC",
    "distrito": "BAMBAMARCA",
    "diresa": 3.700000000000000e+001,
    "ubigeo": 6.070100000000000e+004,
    "fecha_con": "2020-08-15",
    "embarazo": 0.000000000000000e+000,
    "trimestre": 0.000000000000000e+000,
    "postparto": 0.000000000000000e+000,
    "cardiovascular": 0.000000000000000e+000,
    "diabetes": 0.000000000000000e+000,
    "hepatica": 0.000000000000000e+000,
    "neurologica": 0.000000000000000e+000,
    "inmunodeficiencia": 0.000000000000000e+000,
    "renal": 0.000000000000000e+000,
    "hepatico": 0.000000000000000e+000,
    "pulmonar": 0.000000000000000e+000,
    "cancer": 0.000000000000000e+000,
    "sospechoso": "SI",
    "investigador": "HILDA REYES ULTIMA"
  }]

  constructor(private http: HttpClient) { }

  async getContactosPorIdFicha(ID_FICHA: string) {
    var headers = new HttpHeaders({ client_id: 'diresa_seguimiento', client_secret: 'WrCcm69SZOVZpUpnYuq4' });
    var params = new HttpParams({ fromObject: { 'id_ficha': ID_FICHA } })

    return this.http.get<Contactos[]>(environment.urlBackendSiscovid + 'fichas/GetContactosByFicha', { headers, params })
  }

}
