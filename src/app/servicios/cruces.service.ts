import { Injectable, defineInjectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cruce } from '../compartido/interfaces/cruce';
import { NotiService } from './noti.service';
import { Ficha100Service } from './ficha-100.service';
import { Ficha200Service } from './ficha-200.service';
import { Ficha300Service } from './ficha-300.service';
import { environment } from 'src/environments/environment';
import { DatosGeneralesPersona } from '../compartido/interfaces/datos-generales-persona';


@Injectable({
  providedIn: 'root'
})
export class CrucesService {
  ejemplo: Cruce[] = [
    { DNI1: '41935041', DNI2: '41935041' },
    { DNI1: '41017752', DNI2: null },
    { DNI1: '27560773', DNI2: null },
  ]

  ejemplo2: any[] = [
    { dni_busc: '41935041' },
    { dni_busc: '41017752' },
    { dni_busc: '27560773' },

  ]

  constructor(private http: HttpClient, private baseco: NotiService,
    private ficha100s: Ficha100Service,
    private ficha200s: Ficha200Service,
    private ficha300s: Ficha300Service
  ) { }

  buscarDni() {

    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});
   

    return this.http.get<any[]>(environment.urlBackendSiscovid + 'fichas/getallpersonas',{headers})

  }
  crusarFichas(ficha: string, fichab: string) {
    return this.ejemplo
  }
  async buscarDnis(datos: any[], tabla_buscar: string) {

    let respuesta = await Promise.all(datos.map(async (dato) => {
      let enc
      let resp
      let campo

      if (tabla_buscar == 'ficha100') {

        enc = await this.ficha100s.devolverFicha100porIdentificacion('DNI', dato.dni_busc).toPromise()

        campo = 'Nro_Documento'
      }



      if (tabla_buscar == 'ficha200') {

        enc = this.ficha200s.devolverFicha200('DNI', dato.dni_busc)

        campo = 'Nro_Documento'

      }



      if (tabla_buscar == 'ficha300') {
        enc = await this.ficha300s.devolverFicha300PorIdentificacion('DNI', dato.dni_busc).toPromise()

        campo = 'Nro_Documento'



      }

      if (tabla_buscar == 'ficha00') {

        enc = await this.ficha300s.devolverFicha300PorIdentificacion('DNI', dato.dni_busc).toPromise()

        campo = 'Nro_Documento'

      }

      dato[tabla_buscar] = {}

  
      resp = dato

      if (enc.length > 0) {

        resp[tabla_buscar].existe = true
        resp[tabla_buscar].clase = 'bg-info'


      } else {

        resp[tabla_buscar].existe = false
        resp[tabla_buscar].clase = 'bg-danger'


      }



      return resp

    }


    ))

    return respuesta

  }

  devolverCruces(){
   return this.http.get<any>(environment.urlBackendNode+'cruces/dnis')
  }
}
