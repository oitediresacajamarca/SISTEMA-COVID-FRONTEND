import { Component, OnInit } from '@angular/core';
import { Ficha300 } from 'src/app/compartido/interfaces/ficha-300';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';

@Component({
  selector: 'app-seguimiento-clinico',
  templateUrl: './seguimiento-clinico.component.html',
  styleUrls: ['./seguimiento-clinico.component.scss']
})
export class SeguimientoClinicoComponent implements OnInit {

  constructor(private ficha300s: Ficha300Service) { }

  ficha300datos: Ficha300[]

  ngOnInit(): void {
    this.ficha300datos = this.ficha300s.devolverFicha300PorIdentificacion("", "")
  }

}
