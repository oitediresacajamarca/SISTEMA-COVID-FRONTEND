import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonasService } from 'src/app/servicios/personas.service';


@Component({
  selector: 'app-busqueda-por-identificacion',
  templateUrl: './busqueda-por-identificacion.component.html',
  styleUrls: ['./busqueda-por-identificacion.component.scss']
})
export class BusquedaPorIdentificacionComponent implements OnInit {

  tipo_ambito : string;
  codigo_ambito : string;

  constructor(private formBuilder: FormBuilder, private ficha300s: Ficha300Service,private personass:PersonasService, private logins : LoginService) { }
  @Output('cargoResultadosPorIndentificacionEvent') cargoResultadosPorIndentificacionEvent = new EventEmitter()
  formIdentificacion: FormGroup = new FormGroup({

  })

  ngOnInit(): void {
    this.tipo_ambito  = sessionStorage.getItem('tipo_ambito');
    this.codigo_ambito = sessionStorage.getItem('codigo_ambito');
    this.formIdentificacion = this.formBuilder.group({
      NRO_DOCUMENTO: ''
    })
  }
  cargarRespuesta() {
 
    this.ficha300s.devolverFicha300PorIdentificacionAmbito('DNI',this.formIdentificacion.controls.NRO_DOCUMENTO.value,
    this.tipo_ambito,this.codigo_ambito).subscribe((resp)=>{
      this.cargoResultadosPorIndentificacionEvent.emit(resp)
    });
      
  }

}
