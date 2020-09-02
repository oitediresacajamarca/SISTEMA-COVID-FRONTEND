import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/servicios/datos-generales.service';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { DatosGeneralesPersona } from 'src/app/compartido/interfaces/datos-generales-persona';
import { EstadosService } from 'src/app/servicios/estados.service';
import { NotiService } from 'src/app/servicios/noti.service';
import { Noti } from 'src/app/compartido/interfaces/noti';

@Component({
  selector: 'app-encabesado',
  templateUrl: './encabesado.component.html',
  styleUrls: ['./encabesado.component.scss']
})
export class EncabesadoComponent implements OnInit ,AfterViewInit{

  constructor(private datosg: DatosGeneralesService, private ruta: ActivatedRoute
    , private estados: EstadosService, private notis: NotiService) { }
  async ngAfterViewInit(): Promise<void> {
  
  }
  DatosGenerales: DatosGeneralesPersona= {
    APE_PATERNO: "alex",
    APE_MATERNO: "arana",
    NOMBRES: "alex",
  NOMBRES_COMPLETOS:'cargando informacion',
    FEC_NACIMIENTO: "30/05/1983",
    NRO_DOCUMENTO: "7819821",
    TIPO_DOCUEMNTO: "DNI",
    EDAD: "18",
    DIRECCION: "cargando informacion",
    DISTRITO: "cargando informacion",
    PROVINCIA: "cargando informacion",
    LAT: 76.19922,
    LNG: 4.398293,
    TIPO_DE_SEGURO: "S.I.S",
    FUENTE:'PRUEBAS'
  }
  cantidadSeguimientos

  async ngOnInit() {

    this.DatosGenerales = await this.datosg.devolverDatosGenerales(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO)
    console.log(this.DatosGenerales)
 
  


  }
  datosSeguimiento(e) {
 
    this.cantidadSeguimientos = e.cantidadSeguimientos
  }

}
