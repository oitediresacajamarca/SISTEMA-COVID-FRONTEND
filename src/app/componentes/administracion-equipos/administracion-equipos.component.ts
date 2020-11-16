import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EquipoCovid } from 'src/app/compartido/interfaces/equipo-covid';
import { EquiposCovidService } from 'src/app/servicios/equipos-covid.service';
import { BusquedaPorIdentificacionComponent } from '../panel-busqueda/busqueda-por-identificacion/busqueda-por-identificacion.component';
import { NuevoEquipoComponent } from './nuevo-equipo/nuevo-equipo.component';



@Component({
  selector: 'app-administracion-equipos',
  templateUrl: './administracion-equipos.component.html',
  styleUrls: ['./administracion-equipos.component.scss']
})
export class AdministracionEquiposComponent implements OnInit {

  constructor(public dialog: MatDialog, private modalService: BsModalService, private equipos: EquiposCovidService) { }
  modalRef: BsModalRef;


  listados_equipos: EquipoCovid[] = [
   

  ]

  ngOnInit(): void {
 this.cargarEquipos()
  }

  cargarEquipos(){
    this.equipos.devolverEquipos('4520').subscribe(resultado=>{

      this.listados_equipos=resultado
    })
  }
  aniade() {
    alert()
  }

          openModal(template: TemplateRef<any>) {
            this.modalRef = this.modalService.show(template);

          }

  guardoyactualizar() {

    this.modalRef.hide()
    this.cargarEquipos()
  }

  CerrarModal(){
    this.modalRef.hide()
  }
}
