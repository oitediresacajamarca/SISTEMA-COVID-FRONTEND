import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-reporte-seguimiento',
  templateUrl: './reporte-seguimiento.component.html',
  styleUrls: ['./reporte-seguimiento.component.scss']
})
export class ReporteSeguimientoComponent implements OnInit {

  constructor(private router: ActivatedRoute, private estados: EstadosService) { }

  ngOnInit(): void {
    let dni = this.router.snapshot.params['nro_documento']
    if (dni != undefined) {

      this.estados.NRO_DOCUMENTO = dni

    }
  }

}
