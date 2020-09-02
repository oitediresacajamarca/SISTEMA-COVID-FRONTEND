import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';


@Component({
  selector: 'app-busqueda-por-nombre',
  templateUrl: './busqueda-por-nombre.component.html',
  styleUrls: ['./busqueda-por-nombre.component.scss']
})
export class BusquedaPorNombreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ficha300s: Ficha300Service, private ficha100s: Ficha100Service) { }
  formNombres: FormGroup = new FormGroup({})
  @Output('cargoResultadosPorNombreEvent') cargoResultadosPorNombreEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.formNombres = this.formBuilder.group({
      'Nombres': '',
      'Apellido_Pat': '',
      'Apellido_Mat': ''
    })
  }

  cargarResultados() {
   
    this.ficha100s.devolverFicha100porNombres(this.formNombres.controls.Nombres.value, this.formNombres.controls.Apellido_Pat.value, this.formNombres.controls.Apellido_Mat.value).subscribe(resultado => {
     this.cargoResultadosPorNombreEvent.emit(resultado)

    })

  }

}
