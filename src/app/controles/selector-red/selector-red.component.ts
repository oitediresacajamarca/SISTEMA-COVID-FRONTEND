import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Red } from 'src/app/compartido/interfaces/Red';
import { DistribucionAdministrativaService } from 'src/app/servicios/distribucion-administrativa.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-selector-red',
  templateUrl: './selector-red.component.html',
  styleUrls: ['./selector-red.component.scss']
})
export class SelectorRedComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;
  redSel : Red
  constructor(private distadmins: DistribucionAdministrativaService, private logins : LoginService) { }
  @Input('SUBREGION') COD_SUBREGION = 1
  redes_filtradas : Red[]
  @Output() seleccionoRedEvent = new EventEmitter<any>()

  ngOnInit(): void {

    this.logins.devolverUsuario().subscribe(resp=>{
      
      this.tipo_ambito = resp.usuarioAmbito.tipo_ambito;
      this.codigo_ambito = resp.usuarioAmbito.codigo_ambito;
      
      this.cargarRedes(this.COD_SUBREGION)

    });
    
    
  }

  cargarRedes(subregion: number) {
    
    this.distadmins.devolverRedAmbito(this.tipo_ambito, this.codigo_ambito).subscribe(resp=>{
      this.redes_filtradas = resp.filter(r=>r.ID_SUBREGION == subregion);
      if(this.redes_filtradas){
        this.redSel = this.redes_filtradas[0];
        this.seleccionoRed({value: this.redSel} );
      }
    })

  }
  seleccionoRed(e) {
    if(e){
      this.seleccionoRedEvent.emit(e.value.ID_RED)
    }
    
  }

  compareObjects(a : Red, b: Red){
    return a.ID_RED === b.ID_RED;
  }

}
