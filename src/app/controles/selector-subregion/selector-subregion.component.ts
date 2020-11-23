import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SubRegion } from 'src/app/compartido/interfaces/subregion';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-selector-subregion',
  templateUrl: './selector-subregion.component.html',
  styleUrls: ['./selector-subregion.component.scss']
})
export class SelectorSubregionComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;
  subregionSel : SubRegion;
  constructor(private distadmins: DistribucionAdministrativaService, private logins: LoginService) { }

subregiones: SubRegion[]
@Output('selecionoRegionEvento') selecionoRegionEvento= new EventEmitter()
@ViewChild('selectorsubregion') selectorsubregion:MatSelect

  ngOnInit(): void {

    //obtener usuario

    this.tipo_ambito = localStorage.getItem("tipo_ambito");
    this.codigo_ambito = localStorage.getItem("codigo_ambito");
    this.cargarSubRegiones();
    
  }

cargarSubRegiones(){
    

  this.distadmins.devolverSubRegionAmbito(this.tipo_ambito, this.codigo_ambito).subscribe(resp=>{
    this.subregiones = resp;
    if(this.subregiones){
      this.subregionSel = this.subregiones[0]
      this.selecionoRegion({value: this.subregionSel});
    }
  })
}

  selecionoRegion(e){
    if(e && e.value){
      console.log("Subregion")
      console.log(e)
      
      this.selecionoRegionEvento.emit(e.value.ID_SUBREGION)
    }
    
  }


  compareObjects(a : SubRegion, b: SubRegion){
    return a.ID_SUBREGION === b.ID_SUBREGION;
  }



}
