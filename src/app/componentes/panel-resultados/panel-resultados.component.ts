import { Component, OnInit, Input } from '@angular/core';
import { PanelResultados } from './panel-resultados.interface';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-panel-resultados',
  templateUrl: './panel-resultados.component.html',
  styleUrls: ['./panel-resultados.component.scss']
})
export class PanelResultadosComponent implements OnInit {


 resultados: PanelResultados[]
  constructor(private router: Router) {
    this.resultados = [{
      Distrito: "CAJAMARCA",
      Edad: 17,
      Fecha_Diagnostico_Positivo: "17/02/2020",
      Ipress: "0000034",
      NombreIpress: "SAN LORENZO",
      Nombres_Paciente: "BRIONES SALAZAR QUIROZ",
      Numero_Doc: "67182712",
      Provincia: "chota",
      Tipo_Doc: "DNI"
    }]
  }




  displayedColumns: string[] = ['Tipo_Doc', 'Numero_Doc', 'Nombres_Paciente', 'Fecha_Diagnostico_Positivo', 'Edad', 'Provincia', 'Distrito', 'Ipress', 'NombreIpress', 'Acciones'];
  dataSource

  ngOnInit(): void {
    this.dataSource = this.resultados
  }
  verSeguimiento(e) {
    console.log(e)
    this.router.navigate(['/reporte/' + e])

  }


}
