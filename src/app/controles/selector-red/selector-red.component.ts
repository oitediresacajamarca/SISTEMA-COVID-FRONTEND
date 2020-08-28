import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-selector-red',
  templateUrl: './selector-red.component.html',
  styleUrls: ['./selector-red.component.scss']
})
export class SelectorRedComponent implements OnInit {


  constructor() { }
  @Input('SUBREGION') COD_SUBREGION = 1
  redes_filtradas
  redes
  @Output() seleccionoRedEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.redes = [
      { label: "CONTUMAAZA", value: 1, subregion: 1 },
      { label: "CAJAMARCA", value: 2, subregion: 1 },
      { label: "CELENDIN", value: 3, subregion: 1 },
      { label: "SAN MARCOS", value: 4, subregion: 1 },
      { label: "CAJABAMBA", value: 5, subregion: 1 },
      { label: "SAN MIGUEL", value: 6, subregion: 1 },
      { label: "SAN PABLO", value: 7, subregion: 1 },
      { label: "CHOTA", value: 8, subregion: 2 },
      { label: "BAMBAMARCA", value: 9, subregion: 2 },
      { label: "SANTA CRUZ", value: 10, subregion: 2 },
      { label: "CUTERVO", value: 11, subregion: 3 },
      { label: "SOCOTA", value: 12, subregion: 3 },
      { label: "JAEN", value: 13, subregion: 4 },
      { label: "SAN IGNACION", value: 14, subregion: 4 },
    ];
    this.cargarRedes(this.COD_SUBREGION)
  }

  cargarRedes(subregion: number) {
    this.redes_filtradas = this.redes.filter((red) => { return red.subregion == subregion })

  }
  seleccionoRed(e) {
  
    this.seleccionoRedEvent.emit(e.value)
  }

}
