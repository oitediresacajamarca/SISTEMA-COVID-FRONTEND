import { Component, OnInit } from '@angular/core';
import { Noti } from 'src/app/compartido/interfaces/noti';
import { NotiService } from 'src/app/servicios/noti.service';

@Component({
  selector: 'app-base-noti',
  templateUrl: './base-noti.component.html',
  styleUrls: ['./base-noti.component.scss']
})
export class BaseNotiComponent implements OnInit {

  constructor(private NotiS: NotiService) { }
  notis: Noti[]
  ngOnInit(): void {
    this.devolverNoti()
  }

  devolverNoti() {
    this.notis = this.NotiS.devolverNotiPorIdentificacion("", "")
 this.notis=   this.notis.map((noti) => {
      let notire: any = noti
      if (noti.clasificacion="CONFIRMADO") {

        notire.stilo_clasificacion="danger"
      }
      if (noti.clasificacion="SOSPECHOSO") {

        notire.stilo_clasificacion="warning"
      }

      return notire
    })
  }

}
