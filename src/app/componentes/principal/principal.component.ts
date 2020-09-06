import { Component, OnInit, ViewChild } from '@angular/core';
import { Ficha300 } from 'src/app/compartido/interfaces/ficha-300';
import { DatosGeneralesPersona } from 'src/app/compartido/interfaces/datos-generales-persona';
import { PanelResultados } from '../panel-resultados/panel-resultados.interface';
import { PanelResultadosComponent } from '../panel-resultados/panel-resultados.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }
  resulatdosCargas
  @ViewChild('panelresultados') panelresultados:PanelResultadosComponent

  ngOnInit(): void {
  }
  async cargarResultados(e) {


   


    this.panelresultados.tablaresultados.dataSource= e
  
    
    this.panelresultados.tablaresultados.renderRows()

  

  }

}
