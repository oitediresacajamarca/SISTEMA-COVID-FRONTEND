import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectorRedComponent } from '../selector-red/selector-red.component';
import { SelectorMicroredComponent } from '../selector-microred/selector-microred.component';
import { SelectorIpressComponent } from '../selector-ipress/selector-ipress.component';

@Component({
  selector: 'app-selector-ipress-completo-horizontal',
  templateUrl: './selector-ipress-completo-horizontal.component.html',
  styleUrls: ['./selector-ipress-completo-horizontal.component.scss']
})
export class SelectorIpressCompletoHorizontalComponent implements OnInit {

  constructor() { }
  @ViewChild('selectorRed')
  selectorRed: SelectorRedComponent
  @ViewChild('selectorMicrored')
  selectorMicrored: SelectorMicroredComponent
  @ViewChild('selectorIpress')
  selectorIpress: SelectorIpressComponent
  @Output() selecionoIpressEvent= new EventEmitter<any>()

  tipo_ambito : string;
  codigo_ambito : string;


  ngOnInit(): void {
    this.tipo_ambito = sessionStorage.getItem('tipo_ambito');
    this.codigo_ambito = sessionStorage.getItem('codigo_ambito');
  }
  seleccionoSubregion(e) {
    this.selectorRed.COD_SUBREGION = e
    this.selectorRed.cargarRedes(e)
  }
  seleccionoRed(e) {

    this.selectorMicrored.cod_red = e
    this.selectorMicrored.devolverMicrored()
  }
  seleccionoMicrored(e) {
    this.selectorIpress.id_microred = e
    this.selectorIpress.devolverIpressPorMicrored()
  }

  seleccionoIpress(e){
 
    this.selecionoIpressEvent.emit(e)
  }

}
