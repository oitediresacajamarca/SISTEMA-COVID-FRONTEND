import { Component, OnInit } from '@angular/core';
import { HospitalizadosService } from 'src/app/servicios/hospitalizados.service';
import { Hospitalizados } from 'src/app/compartido/interfaces/hospitalizados';

@Component({
  selector: 'app-hospitalizacion',
  templateUrl: './hospitalizacion.component.html',
  styleUrls: ['./hospitalizacion.component.scss']
})
export class HospitalizacionComponent implements OnInit {

  constructor(private hospitals: HospitalizadosService) { }

  hospitalizados: Hospitalizados[]

  ngOnInit(): void {
    this.hospitalizados = this.hospitals.devolverHospitalizadosPorIdentificacion("", "")
  }

}
