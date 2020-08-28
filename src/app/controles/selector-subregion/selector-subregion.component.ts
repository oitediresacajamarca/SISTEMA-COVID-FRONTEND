import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-selector-subregion',
  templateUrl: './selector-subregion.component.html',
  styleUrls: ['./selector-subregion.component.scss']
})
export class SelectorSubregionComponent implements OnInit {
subregiones
@Output('selecionoRegionEvento') selecionoRegionEvento= new EventEmitter()
@ViewChild('selectorsubregion') selectorsubregion:MatSelect
  constructor() { }


  ngOnInit(): void {
    this.subregiones = [

      { label: "CAJAMARCA", value: 1 },
      { label: "CHOTA", value: 2 },
      { label: "CUTERVO", value: 3 },
      { label: "JAEN", value: 4 }
    ];
  }
  selecionoRegion(e){

    this.selecionoRegionEvento.emit( e.value)
  }


}
