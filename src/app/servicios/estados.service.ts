import { Injectable } from '@angular/core';
import { CitaProgramadaInterface } from '../componentes/vacunacion-covid/cita-programada.interface';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor() { 

    this.ESTADO_REGISTRO_COVID={ficha_00:0,ficha_100:0,ficha_200:0,ficha_300:0, hospitalizacion:0}
    this.citapro={  PROVINCIA: '',
      DISTRITO: '',
      TIPO_VIA: '',
      NOMBRE_VIA: '',
      NUMERO: '',
      REFERENCIA: '',
      NOMBRE_PUNTO_VACUNACION: '',
      NUMERO_TELEFONO: '',
      CORREO_ELECTRONICO: '',
      TIPO_SEGURO: '',
      numero_documento: '',
      ape_paterno: '',
      ape_materno: '',
      nombres: ''}
  }

  NRO_DOCUMENTO: string='0'
  TIP_DOCUMENTO: string='0'
  ID_NOTI:string='0'
  ESTADO_REGISTRO_COVID:
    {
      ficha_00:number,
      ficha_100: number,
      ficha_200: number,
      ficha_300: number,
      hospitalizacion: number
    }

    citapro:CitaProgramadaInterface




}
