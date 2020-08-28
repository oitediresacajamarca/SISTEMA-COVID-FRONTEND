import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosGeneralesPersona } from '../compartido/interfaces/datos-generales-persona';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {

  constructor(private http: HttpClient) { }

  devolverDatosGenerales(TIPO_DOCUMNETO: string, NRO_DOCUMENTO: string) {

    let respuesta: DatosGeneralesPersona = {
      APE_PATERNO: "alex",
      APE_MATERNO: "arana",
      NOMBRES: "alex",
      FEC_NACIMIENTO: "30/05/1983",
      NRO_DOCUMENTO: "7819821",
      TIPO_DOCUEMNTO: "DNI",
      EDAD:"18",
      DIRECCION:"JR LA PAZ 239",
      DISTRITO:"CAJAMARCA",
      PROVINCIA:"CAJAMARCA",
      LAT:76.19922,
      LNG:4.398293,
      TIPO_DE_SEGURO:"S.I.S"


    }

    return respuesta
  }
}
