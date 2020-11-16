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
  subregionSel : SubRegion;
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
    if(this.subregiones){
      this.subregionSel = this.subregiones[0]
      this.selecionoRegion(this.subregionSel);
    }
  })
}

  selecionoRegion(e){

    this.selecionoRegionEvento.emit(e.ID_SUBREGION)
  }


  compareObjects(a : SubRegion, b: SubRegion){
    return a.ID_SUBREGION === b.ID_SUBREGION;
  }



}
