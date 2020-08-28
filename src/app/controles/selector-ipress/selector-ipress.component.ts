import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';


@Component({
  selector: 'app-selector-ipress',
  templateUrl: './selector-ipress.component.html',
  styleUrls: ['./selector-ipress.component.scss']
})
export class SelectorIpressComponent implements OnInit {

  constructor(private distadms: DistribucionAdministrativaService) { }
  @Input() id_microred: number = 90
  @Output() seleccionoIpressEvent = new EventEmitter<any>()
  ipressfiltradas
  ngOnInit(): void {
    this.devolverIpressPorMicrored()
  }

  devolverIpressPorMicrored() {
    this.distadms.devolverIpressPorMicrored(this.id_microred).subscribe(respuesta => {
      this.ipressfiltradas = respuesta.respuesta
    })

  }
  seleccionoIpress(e) {
       this.seleccionoIpressEvent.emit(e.value)
  }


}
