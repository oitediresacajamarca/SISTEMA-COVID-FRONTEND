import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Ficha300 } from 'src/app/compartido/interfaces/ficha-300';
import { Ficha300Service } from 'src/app/servicios/ficha-300.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { MedicamentosService } from 'src/app/servicios/medicamentos.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-seguimiento-clinico',
  templateUrl: './seguimiento-clinico.component.html',
  styleUrls: ['./seguimiento-clinico.component.scss']
})
export class SeguimientoClinicoComponent implements OnInit {
  modalRef: BsModalRef;
  @Output('cargoSeguimientoClinico') cargoSeguimientoClinico=new EventEmitter<any>()

  constructor(private ficha300s: Ficha300Service, private estados: EstadosService,private medicamentoss:MedicamentosService
    , private modalService: BsModalService) { }

  ficha300datos: Ficha300[]

  ngOnInit(): void {
    this.ficha300s.devolverFicha300PorIdentificacion(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO).subscribe((respuesta) => {

      this.ficha300datos = respuesta
      this.cargoSeguimientoClinico.emit({cantidadSeguimientos:this.ficha300datos.length})
      this.estados.ESTADO_REGISTRO_COVID.ficha_300= this.ficha300datos.length
      

    })
  }


VerMedicacion(template, ficha300:any){
this.entregas=this.cargarMedicacion(ficha300)
this.openModal(template)
}

  async cargarMedicacion(ficha300:any){

  /*const medicmentos=await this.medicamentoss.devolverMedicamentos(ficha300.Nro_Documento).toPromise()
  return medicmentos*/
  
  }
  entregas:any
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);


  }

}
