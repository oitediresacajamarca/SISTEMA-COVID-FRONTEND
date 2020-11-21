import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MicroRed } from 'src/app/compartido/interfaces/microred';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-selector-microred',
  templateUrl: './selector-microred.component.html',
  styleUrls: ['./selector-microred.component.scss']
})
export class SelectorMicroredComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;

  constructor(private distadmins: DistribucionAdministrativaService, private logins : LoginService) { }
  @Input() cod_red: number = 13
  microredesfiltardas : MicroRed[]

  microRedSel : MicroRed

  @Output() seleccionoMicroredEvent = new EventEmitter<any>()

  ngOnInit(): void {

    
    this.logins.devolverUsuario().subscribe(resp=>{
      
      this.tipo_ambito = resp.usuarioAmbito.tipo_ambito;
      this.codigo_ambito = resp.usuarioAmbito.codigo_ambito;
      
      this.devolverMicrored()

    });
    
  }
  devolverMicrored() {
 
    this.distadmins.devolverMicroredPorRed(this.cod_red, this.tipo_ambito, this.codigo_ambito).subscribe((resp) => {      
      this.microredesfiltardas = resp.filter(r=>r.ID_RED == this.cod_red);
      if(this.microredesfiltardas){
        this.microRedSel = this.microredesfiltardas[0];
        this.seleccionoMicrored({value: this.microRedSel});
      }
    })
  }

  seleccionoMicrored(e) {
    if(e && e.value){
      this.seleccionoMicroredEvent.emit(e.value.ID_MICRORED)
    }
    
  }

  compareObjects(a : MicroRed, b: MicroRed){
    return a.ID_MICRORED === b.ID_MICRORED;
  }

}
