import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SubRegion } from 'src/app/compartido/interfaces/subregion';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';


@Component({
  selector: 'app-selector-subregion',
  templateUrl: './selector-subregion.component.html',
  styleUrls: ['./selector-subregion.component.scss']
})
export class SelectorSubregionComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;
  constructor(private distadmins: DistribucionAdministrativaService) { }

subregiones: SubRegion[]
@Output('selecionoRegionEvento') selecionoRegionEvento= new EventEmitter()
@ViewChild('selectorsubregion') selectorsubregion:MatSelect

  ngOnInit(): void {
    this.tipo_ambito  = sessionStorage.getItem('tipo_ambito');
    this.codigo_ambito = sessionStorage.getItem('codigo_ambito');
    this.cargarSubRegiones();
  }

cargarSubRegiones(){
  this.distadmins.devolverSubRegionAmbito(this.tipo_ambito, this.codigo_ambito).subscribe(resp=>{
    this.subregiones = resp;
  })
}

  selecionoRegion(e){

    this.selecionoRegionEvento.emit( e.value)
  }


}
