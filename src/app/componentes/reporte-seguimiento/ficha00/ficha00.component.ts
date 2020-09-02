import { Component, OnInit } from '@angular/core';
import { Ficha0Service } from 'src/app/servicios/ficha-0.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { Ficha00 } from 'src/app/compartido/interfaces/ficha_00';

@Component({
  selector: 'app-ficha00',
  templateUrl: './ficha00.component.html',
  styleUrls: ['./ficha00.component.scss']
})
export class Ficha00Component implements OnInit {

  constructor(private ficha0s: Ficha0Service, private estadoss: EstadosService) { }
  Fichas0: Ficha00[]

  ngOnInit(): void {
    this.ficha0s.devolverFicha0PorIdentificacion(this.estadoss.TIP_DOCUMENTO, this.estadoss.NRO_DOCUMENTO).subscribe((respuesta) => {
      console.log(respuesta)
      this.Fichas0 = respuesta;
      this.estadoss.ESTADO_REGISTRO_COVID.ficha_00= this.Fichas0.length

    })
  }

}
