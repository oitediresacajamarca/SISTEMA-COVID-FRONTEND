import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-cita-programada-resultado',
  templateUrl: './cita-programada-resultado.component.html',
  styleUrls: ['./cita-programada-resultado.component.scss']
})
export class CitaProgramadaResultadoComponent implements OnInit {

  constructor(private estados :EstadosService) { }
  cita:any={}
  fecha:Date

  ngOnInit(): void {
   Object.assign( this.cita,this.estados.citapro)
   

  
  }
  imprimir(){
    window.print()
  }


}
