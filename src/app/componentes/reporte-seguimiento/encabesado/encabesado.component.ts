import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/servicios/datos-generales.service';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { DatosGeneralesPersona } from 'src/app/compartido/interfaces/datos-generales-persona';

@Component({
  selector: 'app-encabesado',
  templateUrl: './encabesado.component.html',
  styleUrls: ['./encabesado.component.scss']
})
export class EncabesadoComponent implements OnInit {

  constructor(private datosg: DatosGeneralesService, private ruta: ActivatedRoute) { }
  DatosGenerales: DatosGeneralesPersona

  ngOnInit(): void {

    this.DatosGenerales = this.datosg.devolverDatosGenerales("DNI", this.ruta.snapshot.params.NRO_DOCUMENTO)


  }


}
