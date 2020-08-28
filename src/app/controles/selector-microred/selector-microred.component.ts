import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';


@Component({
  selector: 'app-selector-microred',
  templateUrl: './selector-microred.component.html',
  styleUrls: ['./selector-microred.component.scss']
})
export class SelectorMicroredComponent implements OnInit {

  constructor(private distadmins: DistribucionAdministrativaService) { }
  @Input() cod_red: number = 13
  microredesfiltardas
  @Output() seleccionoMicroredEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.devolverMicrored()
  }
  devolverMicrored() {
    this.distadmins.devolverMicroredPorRed(this.cod_red).subscribe((respuesta) => {
      this.microredesfiltardas = respuesta.respuesta
    })
  }

  seleccionoMicrored(e) {
    this.seleccionoMicroredEvent.emit(e.value)
  }

}
