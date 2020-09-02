import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PanelResultados } from './panel-resultados.interface';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EstadosService } from 'src/app/servicios/estados.service';
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


  @ViewChild('tablaresultados')
  tablaresultados: MatTable<PanelResultados>
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;


  @Input()
  resultados: PanelResultados[]
  constructor(private router: Router, private estados: EstadosService) {

  }




  displayedColumns: string[] = ['Tipo_Doc', 'Numero_Doc', 'Nombres_Paciente', 'Fecha_Diagnostico_Positivo', 'Edad', 'Provincia', 'Distrito', 'Ipress', 'NombreIpress', 'Acciones'];
  dataSource = new MatTableDataSource<PanelResultados>([]);

  ngOnInit(): void {

    this.resultados = []


    this.dataSource.data = this.resultados
    this.dataSource.paginator = this.paginator;




  }
  verSeguimiento(e) {


    this.estados.NRO_DOCUMENTO = e.Numero_Doc;
    this.estados.TIP_DOCUMENTO = e.Tipo_Doc;

    this.router.navigate(['/reporte/'])

  }


}
