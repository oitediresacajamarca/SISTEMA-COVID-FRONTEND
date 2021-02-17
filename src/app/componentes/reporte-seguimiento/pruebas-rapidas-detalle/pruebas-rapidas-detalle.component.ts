import { Component, OnInit } from '@angular/core';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';
import { EstadosService } from 'src/app/servicios/estados.service';
import { NotiService } from 'src/app/servicios/noti.service';
import { Noti } from 'src/app/compartido/interfaces/noti';

@Component({
  selector: 'app-pruebas-rapidas-detalle',
  templateUrl: './pruebas-rapidas-detalle.component.html',
  styleUrls: ['./pruebas-rapidas-detalle.component.scss']
})
export class PruebasRapidasDetalleComponent implements OnInit {

  ficha100s: Ficha100[]
  notiweb : Noti
  pruebas : any[]
  constructor(private f100s: Ficha100Service, private estados: EstadosService, private notis: NotiService) { }
  
  ngOnInit(): void {
    console.log("Pruebas rapidas detalle")
    this.pruebas = []
    this.notiweb = null
    this.f100s.devolverFicha100porIdentificacion(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO).subscribe((respuesta) => {
      if(respuesta){
        this.ficha100s = respuesta.sort((a,b)=>{
          if(a.Fecha_Prueba > b.Fecha_Prueba) return -1;
          if(a.Fecha_Prueba < b.Fecha_Prueba) return 1;

          return 0;
        })
        console.log("Ficha 100")
        console.log(this.ficha100s)
        this.estados.ESTADO_REGISTRO_COVID.ficha_100=this.ficha100s.length
      }
      
    })
    //buscar en noti
    this.notis.devolverNotiPorIdentificacion(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO).subscribe((resp)=>{
      
      if(resp){
        this.notiweb = resp[0];
   
        if(this.notiweb.muestra){
          let prueba : any = {
            dni: this.notiweb.dni,
            fecha : this.notiweb.fecha_mue, 
            muestra : this.notiweb.muestra,
            prueba : this.notiweb.prueba,
            resultado : this.notiweb.resultado,
            fecha_res : this.notiweb.fecha_res,
            orden : 1
          }
          
          this.pruebas.push(prueba)
        }
        if(this.notiweb.muestra1){
          let prueba1 : any = {
            dni: this.notiweb.dni,
            fecha : this.notiweb.fecha_mue1, 
            muestra : this.notiweb.muestra1,
            prueba : this.notiweb.prueba1,
            resultado : this.notiweb.resultado1,
            fecha_res : this.notiweb.fecha_res1,
            orden : 2
          }
          this.pruebas.push(prueba1)
        }
        if(this.notiweb.muestra_rap){
          let prueba3 : any = {
            dni: this.notiweb.dni,
            fecha : this.notiweb.fecha_rap, 
            muestra : this.notiweb.muestra_rap,
            prueba : this.notiweb.prueba_rap,
            resultado : this.notiweb.resultado_rap,
            fecha_res : this.notiweb.fecha_res_rap,
            orden : 3
          }
          this.pruebas.push(prueba3)
        }

        if(this.notiweb.muestra_rap1){
          let prueba4 : any = {
            dni: this.notiweb.dni,
            fecha : this.notiweb.fecha_rap1, 
            muestra : this.notiweb.muestra_rap1,
            prueba: this.notiweb.prueba_rap1,
            resultado : this.notiweb.resultado_rap1,
            fecha_res : this.notiweb.fecha_res_rap1,
            orden : 4
          }
          this.pruebas.push(prueba4)
        }

        this.pruebas = this.pruebas.sort((a,b)=>{
          if(a.orden > b.orden) return -1;
          if(a.orden < b.orden) return 1;

          return 0;
        })
        console.log("Pruebas")
        console.log(this.pruebas)
      }
    })

  }

}
