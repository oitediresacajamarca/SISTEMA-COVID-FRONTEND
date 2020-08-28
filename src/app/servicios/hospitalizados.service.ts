import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospitalizados } from '../compartido/interfaces/hospitalizados';

@Injectable({
  providedIn: 'root'
})
export class HospitalizadosService {

  datosEjemplo: Hospitalizados[] = [
    {
      "fecha_seg": "2020-04-03",
      "nombre": "GINEZ MELENDEZ ELEUTERIO",
      "diresa": "JAEN",
      "red": "DISA JAEN",
      "microred": "OTROS",
      "establecimiento": "HOSPITAL GENERAL DE JAEN",
      "clasificacion": "CONFIRMADO",
      "telefono": 9.615134630000000e+008,
      "fecha_nac": "16-08-1953",
      "edad": 6.600000000000000e+001,
      "tipo_edad": "AÑOS",
      "sexo": "MASCULINO",
      "dni": 2.767347900000000e+007,
      "pais": "Peru",
      "departamento": "CAJAMARCA",
      "provincia": "JAEN",
      "distrito": "JAEN",
      "direccion": "Pedro Cornejo 211, Jaén, Perú",
      "fecha_hos": "04-04-2020",
      "fecha_ini": "29-03-2020",
      "departamento_hos": "CAJAMARCA",
      "provincia_hos": "JAEN",
      "distrito_hos": "JAEN",
      "establecimiento_hos": "HOSPITAL GENERAL DE JAEN",
      "institucion_hos": "GOBIERNO REGIONAL",
      "ocupacion": "OTROS",
      "personal": "OTRO",
      "otro_personal": "OBRERO",
      "diagnostico": "NEUMONIA",
      "servicio": "SALA DE AISLAMIENTO",
      "ventilacion": "NO",
      "evolucion": "ALTA",
      "fecha_def": "00-00-0000",
      "hora_def": "00:00:00",
      "fecha_alt": "14-04-2020",
      "investigador": "M.C. CESAR AUGUSTO CARDOSO MAIRENA",
      "fecha_mod": "05-05-2020"
    }

  ]
  constructor(private http: HttpClient) {


  }
  devolverHospitalizadosPorIdentificacion(TIPO_DOC: string, NRO_DOCUMENTO: String) {
return this.datosEjemplo

  }
}
