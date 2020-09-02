import { Component, OnInit } from '@angular/core';
import { Noti } from 'src/app/compartido/interfaces/noti';
import { NotiService } from 'src/app/servicios/noti.service';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-base-noti',
  templateUrl: './base-noti.component.html',
  styleUrls: ['./base-noti.component.scss']
})
export class BaseNotiComponent implements OnInit {

  constructor(private NotiS: NotiService, private estados: EstadosService) { }
  notis: Noti[]
  ngOnInit(): void {
    this.devolverNoti()
  }

   devolverNoti() {
     this.NotiS.devolverNotiPorIdentificacion(this.estados.TIP_DOCUMENTO, this.estados.NRO_DOCUMENTO).subscribe((respuesta) => {

      this.notis = respuesta

      this.notis = this.notis.map((noti) => {
        let notire: any = noti
        if (noti.clasificacion = "CONFIRMADO") {
  
          notire.stilo_clasificacion = "danger"
        }
        if (noti.clasificacion = "SOSPECHOSO") {
  
          notire.stilo_clasificacion = "warning"
        }
  
        return notire
      })


      console.log(this.notis)
    }
    )





  
  }


}
