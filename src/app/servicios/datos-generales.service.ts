import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosGeneralesPersona } from '../compartido/interfaces/datos-generales-persona';
import { NotiService } from './noti.service';
import { EstadosService } from './estados.service';
import { Ficha100Service } from './ficha-100.service';
import { Noti } from '../compartido/interfaces/noti';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {

  constructor(private http: HttpClient, private basenotis: NotiService,
    private estados: EstadosService, private ficha100s: Ficha100Service) { }
  respuestaEjemplo:DatosGeneralesPersona = {
    APE_PATERNO: "alex",
    APE_MATERNO: "arana",
    NOMBRES: "alex",
  NOMBRES_COMPLETOS:'ALEX EDWIN ARANA RABANAL',
    FEC_NACIMIENTO: "30/05/1983",
    NRO_DOCUMENTO: "7819821",
    TIPO_DOCUEMNTO: "DNI",
    EDAD: "18",
    DIRECCION: "JR LA PAZ 239",
    DISTRITO: "CAJAMARCA",
    PROVINCIA: "CAJAMARCA",
    LAT: 76.19922,
    LNG: 4.398293,
    TIPO_DE_SEGURO: "S.I.S",
    FUENTE:'PRUEBAS'
  }
  async devolverDatosGenerales(TIPO_DOCUMNETO: string, NRO_DOCUMENTO: string): Promise<DatosGeneralesPersona> {

    let respuesta: DatosGeneralesPersona = this.respuestaEjemplo
    let respuestanoti:Noti[] = await this.basenotis.devolverNotiPorIdentificacion(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO).toPromise()
    if (respuestanoti.length > 0) { 
      
         return {
        APE_PATERNO: '',
        APE_MATERNO: '',
        NOMBRES: respuestanoti[0].nombre,
        NOMBRES_COMPLETOS:respuestanoti[0].nombre,
        FEC_NACIMIENTO: respuestanoti[0].fecha_nac,
        NRO_DOCUMENTO: respuestanoti[0].dni,
        TIPO_DOCUEMNTO: respuestanoti[0].tipodoc,
        EDAD: "18",
        DIRECCION: respuestanoti[0].direccion,
        DISTRITO: respuestanoti[0].residencia,
        PROVINCIA: respuestanoti[0].provincia_residencia,
        LAT: 76.19922,
        LNG: 4.398293,
        TIPO_DE_SEGURO: '',
        FUENTE:'NOTI'
      }  
    
    
    }
    else {
      let respuesta100 = await this.ficha100s.devolverFicha100porIdentificacion(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO).toPromise()


      if (respuesta100.length > 0) {
        return {
          APE_PATERNO: respuesta100[0].Apellido_Paterno,
          APE_MATERNO: respuesta100[0].Apellido_Materno,
          NOMBRES: respuesta100[0].nombres,
          NOMBRES_COMPLETOS:respuesta100[0].nombres+' '+respuesta100[0].Apellido_Paterno+' '+respuesta100[0].Apellido_Materno,
          FEC_NACIMIENTO: respuesta100[0].fecha_nac_reniec,
          NRO_DOCUMENTO: respuesta100[0].Nro_Documento,
          TIPO_DOCUEMNTO: respuesta100[0].Tipo_Documento,
          EDAD: "18",
          DIRECCION: respuesta100[0].Direccion,
          DISTRITO: respuesta100[0].Distrito,
          PROVINCIA: respuesta100[0].Provincia,
          LAT: 76.19922,
          LNG: 4.398293,
          TIPO_DE_SEGURO: 'S.I.S',
          FUENTE:'FICHA100'
        }
      }
    }


  
    return respuesta






  }
}
