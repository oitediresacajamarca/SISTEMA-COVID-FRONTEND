import { Component, OnInit } from '@angular/core';
import { HospitalizadosService } from 'src/app/servicios/hospitalizados.service';
import { Hospitalizados } from 'src/app/compartido/interfaces/hospitalizados';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-hospitalizacion',
  templateUrl: './hospitalizacion.component.html',
  styleUrls: ['./hospitalizacion.component.scss']
})
export class HospitalizacionComponent implements OnInit {

  constructor(private hospitals: HospitalizadosService, private estadoss: EstadosService) { }

  hospitalizados: Hospitalizados[]

  ngOnInit(): void {

    this.hospitals.devolverHospitalizadosPorIdentificacion(this.estadoss.TIP_DOCUMENTO, this.estadoss.NRO_DOCUMENTO).subscribe((respuesta) => {

      this.hospitalizados = respuesta

    })
  }

}
