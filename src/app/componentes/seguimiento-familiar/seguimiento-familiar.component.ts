import { Component, OnInit } from '@angular/core';
import { Ficha300 } from 'src/app/compartido/interfaces/ficha-300';
import { Hospitalizados } from 'src/app/compartido/interfaces/hospitalizados';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { HospitalizadosService } from 'src/app/servicios/hospitalizados.service';

@Component({
  selector: 'app-seguimiento-familiar',
  templateUrl: './seguimiento-familiar.component.html',
  styleUrls: ['./seguimiento-familiar.component.scss']
})
export class SeguimientoFamiliarComponent implements OnInit {

  
  dni : string // same as above
  ficha300datos: Ficha300[]
  persona: Ficha300
  hospitalizado: boolean
  hospitalizados: Hospitalizados[]
  registroHosp: Hospitalizados


  constructor(private ficha300s: Ficha300Service,private hospitals: HospitalizadosService) { 

  }

  ngOnInit(): void {
    
  }

  buscarClick() : void{
    this.persona = null;
    this.hospitalizado = false;
    this.registroHosp = null;
    this.ficha300s.devolverFicha300PorIdentificacion("dni",this.dni).subscribe(resp=>{
      if(resp) {
        this.ficha300datos = resp;
        this.persona = this.ficha300datos[0];
        this.hospitals.devolverHospitalizadosPorIdentificacion("dni",this.dni).subscribe(data=>{
          if(data && data.length>0){
            this.hospitalizado = true;
            this.hospitalizados = data;
            this.registroHosp = data[0];
            console.log(data);
          }
        })
      }
    })
  }

}
