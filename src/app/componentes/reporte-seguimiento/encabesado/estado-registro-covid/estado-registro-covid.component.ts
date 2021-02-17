import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-estado-registro-covid',
  templateUrl: './estado-registro-covid.component.html',
  styleUrls: ['./estado-registro-covid.component.scss']
})
export class EstadoRegistroCovidComponent implements OnInit {

  constructor(private estados: EstadosService) { }
  ESTADO_REGISTRO_COVID:
    {
      ficha_00: number,
      ficha_100: number,
      ficha_200: number,
      ficha_300: number,
      hospitalizacion : number
    }
  ngOnInit(): void {
    this.ESTADO_REGISTRO_COVID = this.estados.ESTADO_REGISTRO_COVID
  }

}
