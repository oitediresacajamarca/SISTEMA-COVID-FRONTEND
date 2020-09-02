import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor() { 

    this.ESTADO_REGISTRO_COVID={ficha_00:0,ficha_100:0,ficha_200:0,ficha_300:0}
  }

  NRO_DOCUMENTO: string='0'
  TIP_DOCUMENTO: string='0'
  ID_NOTI:string='0'
  ESTADO_REGISTRO_COVID:
    {
      ficha_00:number,
      ficha_100: number,
      ficha_200: number,
      ficha_300: number
    }

}
