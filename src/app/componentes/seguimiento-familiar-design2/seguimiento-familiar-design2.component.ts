import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento-familiar-design2',
  templateUrl: './seguimiento-familiar-design2.component.html',
  styleUrls: ['./seguimiento-familiar-design2.component.scss']
})
export class SeguimientoFamiliarDesign2Component implements OnInit {

  nombrePersona : string //cambiar por objeto persona
  dni : string // same as above
  evolucion : string[]
  constructor() { }

  ngOnInit(): void {
    this.nombrePersona = "PRUEBA PRUEBA PRUEBA"
    this.dni = "44552233"
    this.evolucion = ["Evento 1","Evento 2","Evento 3", "Evento 4"]
  }

}
