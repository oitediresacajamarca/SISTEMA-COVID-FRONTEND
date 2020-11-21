import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { Ficha100Service } from 'src/app/servicios/ficha-100.service';
import { environment } from 'src/environments/environment';
import { PersonasService } from 'src/app/servicios/personas.service';
import { ResultadoBusqueda } from 'src/app/compartido/interfaces/resultado-busqueda';
import { PanelResultados } from '../../panel-resultados/panel-resultados.interface';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-busqueda-por-nombre',
  templateUrl: './busqueda-por-nombre.component.html',
  styleUrls: ['./busqueda-por-nombre.component.scss']
})
export class BusquedaPorNombreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ficha300s: Ficha300Service, private personas: PersonasService, private ficha100s: Ficha100Service, private logins: LoginService) { }
  formNombres: FormGroup = new FormGroup({})
  tipo_ambito : string;
  codigo_ambito : string;
  @Output('cargoResultadosPorNombreEvent') cargoResultadosPorNombreEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.tipo_ambito  = localStorage.getItem('tipo_ambito');
    this.codigo_ambito = localStorage.getItem('codigo_ambito');
    this.formNombres = this.formBuilder.group({
      'Nombres': '',
      'Apellido_Pat': '',
      'Apellido_Mat': ''
    });

  }

  cargarResultados() {

        this.ficha300s.devolverFicha300PorNombres(this.formNombres.controls.Nombres.value, this.formNombres.controls.Apellido_Pat.value, 
          this.formNombres.controls.Apellido_Mat.value,this.tipo_ambito, this.codigo_ambito).subscribe(res=>{
            this.cargoResultadosPorNombreEvent.emit(res);
          });
      

  }

}
