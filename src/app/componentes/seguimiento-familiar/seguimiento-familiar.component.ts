import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento-familiar',
  templateUrl: './seguimiento-familiar.component.html',
  styleUrls: ['./seguimiento-familiar.component.scss']
})
export class SeguimientoFamiliarComponent implements OnInit {

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
