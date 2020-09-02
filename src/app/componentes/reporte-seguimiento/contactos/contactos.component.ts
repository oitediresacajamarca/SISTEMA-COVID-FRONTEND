import { Component, OnInit, Input } from '@angular/core';
import { Contactos } from 'src/app/compartido/interfaces/contactos';
import { ContactosService } from 'src/app/servicios/contactos.service';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  constructor(private contactoss: ContactosService, private estdoss: EstadosService) { }

  Contactos: Contactos[]
  @Input() ID_NOTI:string='0'

  async ngOnInit(): Promise<void> {
    console.log(this.ID_NOTI)
    this.Contactos =await (await this.contactoss.getContactosPorIdFicha(this.ID_NOTI)).toPromise()
    console.log(this.Contactos )
  }

}
