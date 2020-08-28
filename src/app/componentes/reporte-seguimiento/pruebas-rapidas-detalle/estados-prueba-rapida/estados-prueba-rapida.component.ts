import { Component, OnInit, Input } from '@angular/core';
import { Ficha100 } from 'src/app/compartido/interfaces/ficha-100';

@Component({
  selector: 'app-estados-prueba-rapida',
  templateUrl: './estados-prueba-rapida.component.html',
  styleUrls: ['./estados-prueba-rapida.component.scss']
})
export class EstadosPruebaRapidaComponent implements OnInit {

  constructor() { }
  @Input()
  pruebaRapida: Ficha100
  estados: any[] = []

  ngOnInit(): void {
    let campos: any[] = Object.keys(this.pruebaRapida)

    let camposFiltrados: any[] = campos.filter((campo) => { return typeof (this.pruebaRapida[campo]) == 'boolean' })

    camposFiltrados.map((campoFiltrado) => {
      let est: any = {}
      est = { name: campoFiltrado, completed: this.pruebaRapida[campoFiltrado], color: 'primary' }
      this.estados.push(
        est

      )

    })
    console.log(this.estados)
    


  }


}
