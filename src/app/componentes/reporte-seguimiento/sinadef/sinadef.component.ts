import { Component, OnInit } from '@angular/core';
import { SinadefService } from 'src/app/servicios/sinadef.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { Sinadef } from 'src/app/compartido/interfaces/sinadef';

@Component({
  selector: 'app-sinadef',
  templateUrl: './sinadef.component.html',
  styleUrls: ['./sinadef.component.scss']
})
export class SinadefComponent implements OnInit {

  constructor(private sinadef: SinadefService, private estados: EstadosService) { }
  sinadefs: Sinadef[]
  ngOnInit(): void {
    this.sinadef.devolverSindefPorIdentificacion('DNI/LE', this.estados.NRO_DOCUMENTO).subscribe((respuesta) => {

      this.sinadefs = respuesta

    })
  }

}
