import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';
import { PersonasService } from 'src/app/servicios/personas.service';


@Component({
  selector: 'app-busqueda-por-identificacion',
  templateUrl: './busqueda-por-identificacion.component.html',
  styleUrls: ['./busqueda-por-identificacion.component.scss']
})
export class BusquedaPorIdentificacionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ficha100s: Ficha100Service,private personass:PersonasService) { }
  @Output('cargoResultadosPorIndentificacionEvent') cargoResultadosPorIndentificacionEvent = new EventEmitter()
  formIdentificacion: FormGroup = new FormGroup({

  })

  ngOnInit(): void {
    this.formIdentificacion = this.formBuilder.group({
      NRO_DOCUMENTO: ''
    })
  }

  cargarRespuesta() {
    this.personass.devolverPersonaPorIdentificacion('DNI', this.formIdentificacion.controls.NRO_DOCUMENTO.value).subscribe((respuesta) => {
      this.cargoResultadosPorIndentificacionEvent.emit(respuesta)
 
    })

  }

}
