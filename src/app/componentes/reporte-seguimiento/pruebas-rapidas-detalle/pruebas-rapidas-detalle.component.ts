import { Component, OnInit } from '@angular/core';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';

@Component({
  selector: 'app-pruebas-rapidas-detalle',
  templateUrl: './pruebas-rapidas-detalle.component.html',
  styleUrls: ['./pruebas-rapidas-detalle.component.scss']
})
export class PruebasRapidasDetalleComponent implements OnInit {

  constructor(private f100s:Ficha100Service) { }
  ficha100s:Ficha100[]

  ngOnInit(): void {
    this.ficha100s=this.f100s.devolverFicha100porIdentificacion("","")
  }

}
