import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';


@Component({
  selector: 'app-busqueda-por-identificacion',
  templateUrl: './busqueda-por-identificacion.component.html',
  styleUrls: ['./busqueda-por-identificacion.component.scss']
})
export class BusquedaPorIdentificacionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ficha100s: Ficha100Service) { }
  @Output('cargoResultadosEvent') cargoResultadosEvent = new EventEmitter()
  formIdentificacion: FormGroup = new FormGroup({

  })

  ngOnInit(): void {
    this.formIdentificacion = this.formBuilder.group({

      NRO_DOCUMENTO: ''
    })
  }

  cargarRespuesta() {
    this.ficha100s.devolverFicha100porIdentificacion('DNI', this.formIdentificacion.controls.NRO_DOCUMENTO.value).subscribe((respuesta) => {
      this.cargoResultadosEvent.emit(respuesta)
 
    })

  }

}
