import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MicroRed } from 'src/app/compartido/interfaces/microred';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';


@Component({
  selector: 'app-selector-microred',
  templateUrl: './selector-microred.component.html',
  styleUrls: ['./selector-microred.component.scss']
})
export class SelectorMicroredComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;

  constructor(private distadmins: DistribucionAdministrativaService) { }
  @Input() cod_red: number = 13
  microredesfiltardas : MicroRed[]
  @Output() seleccionoMicroredEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.tipo_ambito  = sessionStorage.getItem('tipo_ambito');
    this.codigo_ambito = sessionStorage.getItem('codigo_ambito');
    this.devolverMicrored()
  }
  devolverMicrored() {
    
    this.distadmins.devolverMicroredPorRed(this.cod_red, this.tipo_ambito, this.codigo_ambito).subscribe((resp) => {      
      this.microredesfiltardas = resp.filter(r=>r.ID_RED == this.cod_red);
    })
  }

  seleccionoMicrored(e) {
    this.seleccionoMicroredEvent.emit(e.value)
  }

}
