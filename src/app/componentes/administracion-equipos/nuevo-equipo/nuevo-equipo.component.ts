import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EquiposCovidService } from 'src/app/servicios/equipos-covid.service';

@Component({
  selector: 'app-nuevo-equipo',
  templateUrl: './nuevo-equipo.component.html',
  styleUrls: ['./nuevo-equipo.component.scss']
})
export class NuevoEquipoComponent implements OnInit {

  constructor(private equipos: EquiposCovidService, private formBuilder: FormBuilder) { }
  @Output('guardo') guardo= new EventEmitter()
  @Output('cerrar') cerrar= new EventEmitter()

  formularioNuevo: FormGroup

  ngOnInit(): void {
    this.formularioNuevo = new FormGroup({})

    this.formularioNuevo = this.formBuilder.group({ cod_establecimiento: '', cod_equipo: '', nro_integrantes: '',nombre_equipo:'' })
  }

  GuardarEquipo() {
    console.log(this.formularioNuevo.value)
    this.equipos.guardarEquipo(this.formularioNuevo.value).subscribe((respuesta)=>{console.log(respuesta)
    
    this.guardo.emit()})    
  }

  Cerrar(){
    console.log(this.cerrar)
this.cerrar.emit()
  }
}
