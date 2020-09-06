import { Component, OnInit, Input } from '@angular/core';
import { Contactos } from 'src/app/compartido/interfaces/contactos';
import { ContactosService } from 'src/app/servicios/contactos.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  constructor(private contactoss: ContactosService, private estdoss: EstadosService,
    private router: Router, private estadoss: EstadosService) { }

  Contactos: Contactos[]
  @Input() ID_NOTI: string = '0'

  async ngOnInit(): Promise<void> {

    this.Contactos = await (await this.contactoss.getContactosPorIdFicha(this.ID_NOTI)).toPromise()

  }

  enrutarContacto(e) {
    console.log(e)
    this.estadoss.NRO_DOCUMENTO = e.dni
    this.estadoss.TIP_DOCUMENTO = 'DNI'
    this.router.navigate(['/reporte'])

  }

}
