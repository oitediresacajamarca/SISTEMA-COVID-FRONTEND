import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ipress } from 'src/app/compartido/interfaces/ipress';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';


@Component({
  selector: 'app-selector-ipress',
  templateUrl: './selector-ipress.component.html',
  styleUrls: ['./selector-ipress.component.scss']
})
export class SelectorIpressComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;

  constructor(private distadms: DistribucionAdministrativaService) { }
  @Input() id_microred: number = 90
  @Output() seleccionoIpressEvent = new EventEmitter<any>()
  ipressfiltradas : Ipress[]
  ipressSel : Ipress
  ngOnInit(): void {
    this.tipo_ambito  = sessionStorage.getItem('tipo_ambito');
    this.codigo_ambito = sessionStorage.getItem('codigo_ambito');
    this.devolverIpressPorMicrored()
  }

  devolverIpressPorMicrored() {
    this.distadms.devolverIpressPorMicrored(this.id_microred,this.tipo_ambito, this.codigo_ambito).subscribe(resp => {
      this.ipressfiltradas = resp.filter(m=>m.ID_MICRORED== this.id_microred);
      if(this.ipressfiltradas){
        this.ipressSel = this.ipressfiltradas[0];
        this.seleccionoIpress(this.ipressSel)

      }
    })

  }
  seleccionoIpress(e) {
    if(e){
      this.seleccionoIpressEvent.emit(e.COD_IPRESS)
    }
      
  }

  compareObjects(a : Ipress, b: Ipress){
    return a.COD_IPRESS === b.COD_IPRESS;
  }


}
