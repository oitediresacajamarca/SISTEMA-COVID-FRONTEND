import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';


@Component({
  selector: 'app-panel-busqueda',
  templateUrl: './panel-busqueda.component.html',
  styleUrls: ['./panel-busqueda.component.scss']
})
export class PanelBusquedaComponent implements OnInit {
  COD_IPRESS
  Desde: Date
  Hasta: Date
  @Output() resultados=new EventEmitter<any>()
  constructor(private ficha300s: Ficha300Service) { }

  ngOnInit(): void {
  }

  selecionoIpess(e) {
    this.COD_IPRESS = e
  }
  buscar() {

   
    this.ficha300s.devolverFicha300PorIpresFechas(this.COD_IPRESS, this.Desde.toLocaleDateString("fr-CA"), this.Hasta.toLocaleDateString("fr-CA")).subscribe((respuesta) => {
//this.resultados.emit(respuesta)
    })
  }


}
