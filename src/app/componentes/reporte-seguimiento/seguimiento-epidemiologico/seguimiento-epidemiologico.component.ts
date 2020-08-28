import { Component, OnInit } from '@angular/core';
import { Ficha200Service } from 'src/app/servicios/ficha-200.service';
import { ActivatedRoute } from '@angular/router';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';
import { Ficha200 } from 'src/app/compartido/interfaces/ficha-200';

@Component({
  selector: 'app-seguimiento-epidemiologico',
  templateUrl: './seguimiento-epidemiologico.component.html',
  styleUrls: ['./seguimiento-epidemiologico.component.scss']
})
export class SeguimientoEpidemiologicoComponent implements OnInit {

  constructor(private ficha200: Ficha200Service, private ruta: ActivatedRoute) { }

  ficha200s: Ficha200[]

  ngOnInit(): void {


    this.ruta.snapshot.params.NRO_DOCUMENTO

    this.ficha200s = this.ficha200.devolverFicha200("DNI",
      this.ruta.snapshot.params.NRO_DOCUMENTO)
  }

}
