import { Component, OnInit, ɵConsole } from '@angular/core';
import { CrucesService } from 'src/app/servicios/cruces.service';
import { PersonasService } from 'src/app/servicios/personas.service';
import { DatosGeneralesPersona } from 'src/app/compartido/interfaces/datos-generales-persona';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Chart } from 'chart.js'
import { from } from 'rxjs';

@Component({
  selector: 'app-monitor-seguimiento',
  templateUrl: './monitor-seguimiento.component.html',
  styleUrls: ['./monitor-seguimiento.component.scss']
})
export class MonitorSeguimientoComponent implements OnInit {

  constructor(private cruces: CrucesService, private personass: PersonasService) { }
  fichas: string[] = ['ficha0', 'ficha100', 'ficha200', 'ficha300', 'ficha400']
  page_number: number = 0
  page_size: number = 10000
  pages: number[]


  ngOnInit(): void {
    this.fichas = ['ficha0', 'ficha100', 'ficha200', 'ficha300', 'ficha400']

    var myPieChart = new Chart('ficha1', {
      type: 'bar',
      data: {

        labels: this.fichas,
        datasets: [
          {
            backgroundColor: ['red', 'blue', 'green', 'red', 'blue'],
            data: [10, 1, 4, 19, 12],
            label: 'studiar'

          }


        ]


      }

    });



    var myPieChart2 = new Chart('ficha2', {
      type: 'bar',
      data: {

        labels: this.fichas,
        datasets: [
          {
            backgroundColor: ['red', 'blue', 'green', 'red', 'blue'],
            data: [10, 1, 4, 19, 12],
            label: 'studiar'

          }


        ]


      }

    });



    var myPieChart2 = new Chart('ficha3', {
      type: 'bar',
      data: {

        labels: this.fichas,
        datasets: [
          {
            backgroundColor: ['red', 'blue', 'green', 'red', 'blue'],
            data: [10, 1, 4, 19, 12],
            label: 'studiar'

          }


        ]


      }

    });
  }
  resultadosCruces: any[] = []
  resultadosdni: any[]
  resultados: any[] = []
  FichasSeleccionadas: string[] = []
  CargarFichaPrimaria() {

  }


  async Comparar() {
    let res = await this.cruces.buscarDni().toPromise()
    console.log(res)

  }
  generarPaginas() {
    this.pages = []
    let countpages = this.resultados.length / this.page_size
    for (let index = 0; index < countpages; index++) {

      this.pages.push(index + 1)


    }


  }

  devolverCrucesDnis() {
    this.cruces.devolverCruces().subscribe(respuesta => {
      this.resultados = respuesta

      this.generarPaginas()
    })

  }

  seleccionarPagina(e) {

    this.page_number = e - 1
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
