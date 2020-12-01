import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { ResultadoBusqueda } from 'src/app/compartido/interfaces/resultado-busqueda';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';
import { PersonasService } from 'src/app/servicios/personas.service';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-panel-busqueda',
  templateUrl: './panel-busqueda.component.html',
  styleUrls: ['./panel-busqueda.component.scss']
})
export class PanelBusquedaComponent implements OnInit {
  COD_IPRESS
  Desde: Date
  Hasta: Date
  public tipo_ambito : string ;
  public codigo_ambito : string;

  public flgSinIpress : boolean;
  public flgBuscarEnAmbito : boolean;

  @Output() resultados = new EventEmitter<any>()

  @Output() inicioBusqueda = new EventEmitter<any>()
  constructor(private ficha300s: Ficha300Service, private persons:PersonasService,  private logins : LoginService) { }

  ngOnInit(): void {
    this.tipo_ambito = localStorage.getItem('tipo_ambito');
    this.codigo_ambito = localStorage.getItem('codigo_ambito');
    this.flgSinIpress = false;  
    this.flgBuscarEnAmbito = false;
    //establecer fecha por defecto
    this.Hasta = new Date();
    this.Desde = new Date(this.Hasta.getFullYear(),this.Hasta.getMonth()-1, this.Hasta.getDate())

  }

 groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  selecionoIpess(e) {
    this.COD_IPRESS = e
  }
  buscar() {
    this.inicioBusqueda.emit()
    let ipress = this.COD_IPRESS
    console.log("CODIGO ==== Ipres")
    console.log(ipress)
    if(ipress == undefined) ipress = 'todos'    
    if(this.flgSinIpress) ipress = '0'

    if(this.flgBuscarEnAmbito) ipress='todos'

    
    this.ficha300s.devolverFicha300PorIpresFechas(ipress, this.Desde.toLocaleDateString("fr-CA"), this.Hasta.toLocaleDateString("fr-CA"), this.tipo_ambito, this.codigo_ambito).subscribe((respuesta) => {
      console.log(respuesta);
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

      this.resultados.emit(respuestaFomrmateada);
    })
     
      
    
  }




  cargoResultadosPorNombreEvent(e) {

    console.log("cargoResultadosPorNombreEvent")
    let respuestaFomrmateada: ResultadoBusqueda[]
    respuestaFomrmateada = e.map((ficha300) => {
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

  }

  cargoResultadosEvent(e) {


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

  async cargoResultadosPorIndentificacionEvent(e) {
 
    let respuestaFomrmateada: ResultadoBusqueda[]
    respuestaFomrmateada = e.map((ficha300) => {
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

  }


}
