import { Component, OnInit } from '@angular/core';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-pruebas-rapidas-detalle',
  templateUrl: './pruebas-rapidas-detalle.component.html',
  styleUrls: ['./pruebas-rapidas-detalle.component.scss']
})
export class PruebasRapidasDetalleComponent implements OnInit {

  constructor(private f100s: Ficha100Service, private estados: EstadosService) { }
  ficha100s: Ficha100[]

  ngOnInit(): void {
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
  }

}
