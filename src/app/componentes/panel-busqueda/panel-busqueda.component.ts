import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { ResultadoBusqueda } from 'src/app/compartido/interfaces/resultado-busqueda';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';


@Component({
  selector: 'app-panel-busqueda',
  templateUrl: './panel-busqueda.component.html',
  styleUrls: ['./panel-busqueda.component.scss']
})
export class PanelBusquedaComponent implements OnInit {
  COD_IPRESS
  Desde: Date
  Hasta: Date
  @Output() resultados = new EventEmitter<any>()


  constructor(private ficha300s: Ficha300Service) { }

  ngOnInit(): void {
  }

  selecionoIpess(e) {
    this.COD_IPRESS = e
  }
  buscar() {


    this.ficha300s.devolverFicha300PorIpresFechas(this.COD_IPRESS, this.Desde.toLocaleDateString("fr-CA"), this.Hasta.toLocaleDateString("fr-CA")).subscribe((respuesta) => {
      let respuestaFomrmateada: ResultadoBusqueda[]
      respuestaFomrmateada = respuesta.map((ficha300) => {
        let respuesta: ResultadoBusqueda = {

          Tipo_Doc: ficha300.Tipo_Documento,
          Numero_Doc: ficha300.Nro_Documento,
          Edad: parseInt(ficha300.Edad),
          Nombres_Paciente: ficha300.Nombres + ' ' + ficha300.Apellido_Paterno + ' ' + ficha300.Apellido_Materno,
          Distrito: ficha300.Distrito,
          Provincia: ficha300.Provincia,
          Fecha_Diagnostico_Positivo: ficha300.Ficha_300_fecha_resultado,
          Ipress: ficha300.cod_establecimiento,
          NombreIpress: ''
        }

        return respuesta

      })

      this.resultados.emit(respuestaFomrmateada)
    })
  }




  cargoResultadosPorNombreEvent(e) {


    let respuestaFomrmateada: ResultadoBusqueda[]
    respuestaFomrmateada = e.map((ficha100) => {
      let ficha100_: Ficha100 = ficha100

      let respuesta: ResultadoBusqueda = {

        Tipo_Doc: ficha100_.Tipo_Documento,
        Numero_Doc: ficha100_.Nro_Documento,
        Edad: ficha100_.Edad,
        Nombres_Paciente: ficha100_.nombres + ' ' + ficha100_.Apellido_Paterno + ' ' + ficha100_.Apellido_Materno,
        Distrito: ficha100_.Distrito,
        Provincia: ficha100_.Provincia,
        Fecha_Diagnostico_Positivo: '',
        Ipress: ficha100_.cod_establecimiento,
        NombreIpress: ''
      }

      return respuesta

    })



    this.resultados.emit(respuestaFomrmateada)

  }

  cargoResultadosEvent(e){

console.log(e)
    let respuestaFomrmateada: ResultadoBusqueda[]
    respuestaFomrmateada = e.map((ficha100) => {
      let ficha100_: Ficha100 = ficha100

      let respuesta: ResultadoBusqueda = {

        Tipo_Doc: ficha100_.Tipo_Documento,
        Numero_Doc: ficha100_.Nro_Documento,
        Edad: ficha100_.Edad,
        Nombres_Paciente: ficha100_.nombres + ' ' + ficha100_.Apellido_Paterno + ' ' + ficha100_.Apellido_Materno,
        Distrito: ficha100_.Distrito,
        Provincia: ficha100_.Provincia,
        Fecha_Diagnostico_Positivo: '',
        Ipress: ficha100_.cod_establecimiento,
        NombreIpress: ''
      }

      return respuesta

    })



    this.resultados.emit(respuestaFomrmateada)


  }


}
