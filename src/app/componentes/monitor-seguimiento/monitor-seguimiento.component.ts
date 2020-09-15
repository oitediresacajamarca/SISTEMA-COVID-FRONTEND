import { Component, OnInit, ɵConsole } from '@angular/core';
import { CrucesService } from 'src/app/servicios/cruces.service';
import { PersonasService } from 'src/app/servicios/personas.service';
import { DatosGeneralesPersona } from 'src/app/compartido/interfaces/datos-generales-persona';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-monitor-seguimiento',
  templateUrl: './monitor-seguimiento.component.html',
  styleUrls: ['./monitor-seguimiento.component.scss']
})
export class MonitorSeguimientoComponent implements OnInit {

  constructor(private cruces: CrucesService, private personass: PersonasService) { }
  fichas: string[] = ['ficha0','ficha100', 'ficha200','ficha300','ficha400']
  page_number: number = 0
  page_size: number = 10000
  pages: number[]


  ngOnInit(): void {
    this.fichas= ['ficha0','ficha100', 'ficha200','ficha300','ficha400']
  }
  resultadosCruces: any[] = []
  resultadosdni: any[]
  resultados: any[]=[]
  FichasSeleccionadas: string[] = []
  CargarFichaPrimaria() {



  }


  async Comparar() {
    let res = await this.cruces.buscarDni().toPromise()
    console.log(res)
    /*  this.resultadosdni = this.cruces.crusarFichas('', '')
      this.resultados = await Promise.all(this.resultadosdni.map(async (rdni) => {
        let resp
        resp = await this.personass.devolverPersonaPorIdentificacion('DNI', rdni.DNI1).toPromise()
        let el
        if (resp.length >= 1) {
          el = resp[0]
        }
        if (rdni.DNI2 == null) {
  
          el.existe = false
          el.clase='bg-danger'
        } else {
          el.existe = true
          el.clase='bg-info'
        }
        el.DNI_BUSCA
  
        return el
  
      }))
  
      console.log(this.resultados)*/

    /*  let datosit = res
      let fichastemp = []
      Object.assign(fichastemp, this.FichasSeleccionadas)
  
      do {
  
        datosit = await this.cruces.buscarDnis(datosit, fichastemp[0])
        fichastemp.splice(0, 1)
  
  
      } while (fichastemp.length > 0);
  
      console.log(datosit)
      console.log(this.FichasSeleccionadas)
      this.resultados = datosit
      this.generarPaginas()
      */

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

    this.page_number = e-1
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
