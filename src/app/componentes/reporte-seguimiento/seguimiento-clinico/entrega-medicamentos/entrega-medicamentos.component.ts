import { Component, Input, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/servicios/estados.service';
import { MedicamentosService } from 'src/app/servicios/medicamentos.service';

@Component({
  selector: 'app-entrega-medicamentos',
  templateUrl: './entrega-medicamentos.component.html',
  styleUrls: ['./entrega-medicamentos.component.scss']
})
export class EntregaMedicamentosComponent implements OnInit {

  constructor(private medicamentos: MedicamentosService, private estadoss: EstadosService) { }
  @Input() numero_documento: string
  @Input() fecha: string

  entregas: any
  async ngOnInit(): Promise<void> {

    /*
      if (this.numero_documento == undefined) {
      this.entregas = await this.medicamentos.devolverMedicamentos(this.estadoss.NRO_DOCUMENTO,'Todos').toPromise()
    }else {
    
      this.entregas = await this.medicamentos.devolverMedicamentos(this.numero_documento, this.fecha).toPromise()
    }
    */    
   if(this.numero_documento && this.fecha){
    this.entregas = await this.medicamentos.devolverMedicamentos(this.numero_documento, this.fecha).toPromise()
   }
   
   

  }

}
