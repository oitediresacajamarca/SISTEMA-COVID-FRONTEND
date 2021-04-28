import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DistritosService } from 'src/app/servicios/distritos.service';
import { CitaVacunacionService } from 'src/app/servicios/vacunacion/cita-vacunacion.service';
import { PadronVacunacionService } from 'src/app/servicios/vacunacion/padron-vacunacion.service';
import { PuntoVacunacionService } from 'src/app/servicios/vacunacion/punto-vacunacion.service';

@Component({
  selector: 'app-vacunacion-covid',
  templateUrl: './vacunacion-covid.component.html',
  styleUrls: ['./vacunacion-covid.component.scss']
})
export class VacunacionCovidComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private PadronVacunacionServic: PadronVacunacionService, private distritoss: DistritosService,
    private PuntoVacunacionServic:PuntoVacunacionService,private cita:CitaVacunacionService) {


  }
  formGroup: FormGroup;
  formGroup2: FormGroup;
  distritos_filtrados: any[] = []

  puntos_vacunacion: any[] = []


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      numero_documento: '',
      ape_paterno: '',
      ape_materno: '',
      nombres: ''

    });
    this.formGroup2 = this.formBuilder.group({
      PROVINCIA: '',
      DISTRITO: '',
      TIPO_VIA: '',
      NOMBRE_VIA: '',
      NUMERO: '',
      REFERENCIA: '',
      NOMBRE_PUNTO_VACUNACION: '',
      NUMERO_TELEFONO: '',
      CORREO_ELECTRONICO: '',
      TIPO_SEGURO: ''

    });
  }

  BuscarDnI() {
    console.log(this.formGroup.value)
    this.PadronVacunacionServic.devolverDatos(this.formGroup.value.numero_documento).subscribe((respuesta) => {

      this.formGroup.setValue({
        numero_documento: this.formGroup.value.numero_documento,
        ape_paterno: respuesta.Apellido_Paterno,
        ape_materno: respuesta.Apellido_Materno,
        nombres: respuesta.Nombres
      })

    }

    )


  }

  actualizar() {
    this.cita.citarPaciente({...this.formGroup2.value,...this.formGroup.value}).subscribe((respuesta)=>{

      console.log(respuesta)
    })
 
    
  }

  FILTRAR_DISTRITOS() {

    this.distritoss.devolverDistritosN(this.formGroup2.value.PROVINCIA).subscribe((res) => {

      this.distritos_filtrados=  res.map((dato)=>{


     return { nombre_distrito:dato.DISTRITO, codigo_distrito: dato.COD_UBIGEO }

      })
  
    })
 



  }

  async FITRAR_PUNTOS_VACUNACION(){

    console.log(this.formGroup2.value)
  this.PuntoVacunacionServic.devolverPuntosPorDistrito(this.formGroup2.value.DISTRITO).subscribe((puntos)=>{

    this.puntos_vacunacion=puntos.map((punto)=>{

      return {nombre_punto:punto._NOMBRE_PUNTO_VACUNACION_}

    })

  })


  }

}
