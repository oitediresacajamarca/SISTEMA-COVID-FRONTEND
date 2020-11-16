import { Component, OnInit, ViewChild } from '@angular/core';
import { Ficha300 } from 'src/app/compartido/interfaces/ficha-300';
import { DatosGeneralesPersona } from 'src/app/compartido/interfaces/datos-generales-persona';
import { PanelResultados } from '../panel-resultados/panel-resultados.interface';
import { PanelResultadosComponent } from '../panel-resultados/panel-resultados.component';
import { ResultadoBusqueda } from 'src/app/compartido/interfaces/resultado-busqueda';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public tipo_ambito : string ;
  public codigo_ambito : string;
  
  constructor() { }
  resulatdosCargas
  @ViewChild('panelresultados') panelresultados:PanelResultadosComponent

  ngOnInit(): void {
  }
  async cargarResultados(e) {

    // eliminar duplicados
    let docs = e.reduce((ac, cv)=>{
      if(ac.map(a=>a.Numero_Doc).indexOf(cv.Numero_Doc)===-1){
        ac.push(cv)
      }
      return ac
    }, [])

   
    console.log("cargarResultados")
    console.log(docs)

    this.panelresultados.tablaresultados.dataSource= docs    
    this.panelresultados.tablaresultados.renderRows()

  }



  groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

}
