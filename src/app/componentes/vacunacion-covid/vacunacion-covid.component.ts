import { Component, Injectable, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DistritosService } from 'src/app/servicios/distritos.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { ActualizacionDataService } from 'src/app/servicios/vacunacion/aactualizacion-data.service';
import { CitaVacunacionService } from 'src/app/servicios/vacunacion/cita-vacunacion.service';
import { PadronVacunacionService } from 'src/app/servicios/vacunacion/padron-vacunacion.service';
import { PuntoVacunacionService } from 'src/app/servicios/vacunacion/punto-vacunacion.service';
import { NgbDateCustomParserFormatter} from 'src/app/componentes/vacunacion-covid/dateFormat';



@Component({
  selector: 'app-vacunacion-covid',
  templateUrl: './vacunacion-covid.component.html',
  styleUrls: ['./vacunacion-covid.component.scss'],
  providers: [
 /*   {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}*/
  ]

})
export class VacunacionCovidComponent implements OnInit {
  model: NgbDateStruct;

  constructor(private formBuilder: FormBuilder, private PadronVacunacionServic: PadronVacunacionService, private distritoss: DistritosService,
    private PuntoVacunacionServic: PuntoVacunacionService, private cita: CitaVacunacionService, private modalService: NgbModal
    , private estados: EstadosService, private rout: Router
    , private actulizadata: ActualizacionDataService, private calendar: NgbCalendar) {
    this.minDate = new Date(1900, 1, 1);
    this.maxDate = new Date(2021, 1, 1);


  }
  @ViewChild('ngbDatepicker') ngbDatepicker: any;
  public minDate: Date = void 0;;
  public maxDate: Date = void 0;
  formGroup: FormGroup;
  formGroup2: FormGroup;
  distritos_filtrados: any[] = []
  noExisteEnPadron: boolean = false;
  citaDisponible: boolean = false;
  personaProtegida: boolean = false;
  resetearEstado() {
    this.noExisteEnPadron = false;
    this.citaDisponible = false;
    this.personaProtegida = false;
    this.existeEnPadron = false;


  }

  puntos_vacunacion: any[] = []
  edad_paciente: number;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      numero_documento: ['', Validators.required],
      ape_paterno: ['', Validators.required],
      ape_materno: ['', Validators.required],
      nombres: ['', Validators.required],
      FECHA_NACIMIENTO: ['', Validators.required]
    });
    this.formGroup2 = this.formBuilder.group({
      PROVINCIA: ['', Validators.required],
      DISTRITO: ['', Validators.required],
      TIPO_VIA: ['', Validators.required],
      NOMBRE_VIA: ['', Validators.required],
      NUMERO: ['', Validators.required],
      REFERENCIA: '',
      NOMBRE_PUNTO_VACUNACION: ['', Validators.required],
      NUMERO_TELEFONO: ['', Validators.required],
      CORREO_ELECTRONICO: ['', Validators.required],
      TIPO_SEGURO: ['', Validators.required],
      TIENE_DISCAPACIDAD: [false, Validators.required]

    });
  }
  existeEnPadron: boolean = false
  BuscarDnI() {



    this.PadronVacunacionServic.devolverDatos(this.formGroup.value.numero_documento).subscribe((respuesta) => {



      this.existeEnPadron = false;

      this.edad_paciente = respuesta.Edad

      let fecha = this.formGroup.value.FECHA_NACIMIENTO
  
      if(
        respuesta.mensaje.existeenhis
      ){
        
        fecha=new Date(respuesta.FECHA_NACIMIENTO)

      }else{

    
        fecha=new Date(fecha.year,fecha.month-1,fecha.day)
      }
      
    
      



      this.formGroup.patchValue({
        numero_documento: this.formGroup.value.numero_documento,
        ape_paterno: respuesta.Apellido_Paterno,
        ape_materno: respuesta.Apellido_Materno,
        nombres: respuesta.Nombres,
        FECHA_NACIMIENTO: fecha
      })


     
      this.model = { day: fecha.getDate(), month: fecha.getMonth() + 1, year: fecha.getFullYear() }
      console.log(this.formGroup.value)

      if (this.edad_paciente >= 80) {
        this.existeEnPadron = true;
        this.noExisteEnPadron = false;
      }
      if (this.edad_paciente >= 60) {
        this.existeEnPadron = true;
        this.noExisteEnPadron = false;
      }
      if (this.edad_paciente < 60) {
        this.existeEnPadron = false;
        this.noExisteEnPadron = true;
      }

    }

    )


  }

  buscarCita(dni: string) {

  }

  actualizar(content) {


console.log(this.formGroup2.value)
    this.modalService.open(content).result.then((result) => {
      let genera_cita = false

      this.actulizadata.actualizarData({ ...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente }).subscribe((respuesta) => {

        this.edad_paciente = respuesta.edad
        console.log(this.formGroup2.value)
        console.log(this.edad_paciente )

        if (this.edad_paciente >= 80) {

          this.cita.citarPaciente({ ...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente }).subscribe((respuesta) => {
            Object.assign(this.estados.citapro, respuesta)

            this.rout.navigate(['/cita-programada-resultado'])
       
          })
        } else {




          this.rout.navigate(['/datos-actualizados'])
        }

      })

    }, (reason) => {

    });



  }

  FILTRAR_DISTRITOS() {



    this.distritoss.devolverDistritosN(this.formGroup2.value.PROVINCIA).subscribe((res) => {

      this.distritos_filtrados = res.map((dato) => {


        return { nombre_distrito: dato.DISTRITO, codigo_distrito: dato.COD_UBIGEO }

      })





    })




  }

  async FITRAR_PUNTOS_VACUNACION() {

    


    this.PuntoVacunacionServic.devolverPuntosPorDistrito(this.formGroup2.value.DISTRITO).subscribe((puntos) => {
      console.log(puntos)

      this.puntos_vacunacion = puntos.map((punto) => {

        return { nombre_punto: punto._NOMBRE_PUNTO_VACUNACION_,EDAD_CITA:punto.EDAD_CITA }

      })

    })


  }

}
