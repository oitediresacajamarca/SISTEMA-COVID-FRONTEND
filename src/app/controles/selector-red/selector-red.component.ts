import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Red } from 'src/app/compartido/interfaces/Red';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';

@Component({
  selector: 'app-selector-red',
  templateUrl: './selector-red.component.html',
  styleUrls: ['./selector-red.component.scss']
})
export class SelectorRedComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;

  constructor(private distadmins: DistribucionAdministrativaService) { }
  @Input('SUBREGION') COD_SUBREGION = 1
  redes_filtradas : Red[]
  @Output() seleccionoRedEvent = new EventEmitter<any>()

  ngOnInit(): void {

    this.tipo_ambito  = sessionStorage.getItem('tipo_ambito');
    this.codigo_ambito = sessionStorage.getItem('codigo_ambito');
    
    this.cargarRedes(this.COD_SUBREGION)
  }

  cargarRedes(subregion: number) {

    this.distadmins.devolverRedAmbito(this.tipo_ambito, this.codigo_ambito).subscribe(resp=>{
      this.redes_filtradas = resp.filter(r=>r.ID_SUBREGION == subregion);
    })

  }
  seleccionoRed(e) {
  
    this.seleccionoRedEvent.emit(e.value)
  }

}
