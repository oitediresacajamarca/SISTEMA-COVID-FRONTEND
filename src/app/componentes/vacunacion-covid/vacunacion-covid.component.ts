import { Component, Injectable, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DistritosService } from 'src/app/servicios/distritos.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { ActualizacionDataService } from 'src/app/servicios/vacunacion/aactualizacion-data.service';
import { CitaVacunacionService } from 'src/app/servicios/vacunacion/cita-vacunacion.service';
import { PadronVacunacionService } from 'src/app/servicios/vacunacion/padron-vacunacion.service';
import { PuntoVacunacionService } from 'src/app/servicios/vacunacion/punto-vacunacion.service';



@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: any | null): NgbDateStruct | null {
   
    
    if(value){

      if (value.day==undefined) {
        let date = value.split(this.DELIMITER);
        return {
          day : parseInt(date[0], 10),
          month : parseInt(date[1], 10),
          year : parseInt(date[2], 10)
        };
      }
      if (value.day!=undefined) {
       
        return {
          day : value.day,
          month : value.month,
          year : value.year
        };
      }
    }
 
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
 
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
  
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


const I18N_VALUES = {
  'fr': {
    weekdays: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weekLabel: 'sem'
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'fr';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) { super(); }

  getWeekdayShortName(weekday: number): string { return I18N_VALUES[this._i18n.language].weekdays[weekday - 1]; }
  getWeekLabel(): string { return I18N_VALUES[this._i18n.language].weekLabel; }
  getMonthShortName(month: number): string { return I18N_VALUES[this._i18n.language].months[month - 1]; }
  getMonthFullName(month: number): string { return this.getMonthShortName(month); }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.day}-${date.month}-${date.year}`; }
}

@Component({
  selector: 'app-vacunacion-covid',
  templateUrl: './vacunacion-covid.component.html',
  styleUrls: ['./vacunacion-covid.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
    I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
  ]

})
export class VacunacionCovidComponent implements OnInit {
  model: NgbDateStruct;

  constructor(private formBuilder: FormBuilder, private PadronVacunacionServic: PadronVacunacionService, private distritoss: DistritosService,
    private PuntoVacunacionServic: PuntoVacunacionService, private cita: CitaVacunacionService, private modalService: NgbModal
    , private estados: EstadosService, private rout: Router
    , private actulizadata: ActualizacionDataService, private calendar: NgbCalendar,
    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {
    this.minDate = new Date(1900, 1, 1);
    this.maxDate = new Date(2021, 1, 1);


  }
  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
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
      CORREO_ELECTRONICO: [''],
      TIPO_SEGURO: ['', Validators.required],
      TIENE_DISCAPACIDAD: [false, Validators.required],
      DISCAPACIDAD_DESCRIPCION:['',]

    });
  }
  existeEnPadron: boolean = false
  cambioFecha() {

   
  }
  BuscarDnI() {



    this.PadronVacunacionServic.devolverDatos(this.formGroup.value.numero_documento).subscribe((respuesta) => {



      this.existeEnPadron = false;

      this.edad_paciente = respuesta.Edad
      console.log(respuesta)

      if(respuesta.mensaje.existeenhis){

        let fec=new Date(respuesta.FECHA_NACIMIENTO)
        this.model={day:fec.getDate(),month:fec.getMonth()+1,year:fec.getFullYear()}

        this.formGroup.patchValue({
          numero_documento: this.formGroup.value.numero_documento,
          ape_paterno: respuesta.Apellido_Paterno,
          ape_materno: respuesta.Apellido_Materno,
          nombres: respuesta.Nombres,
          FECHA_NACIMIENTO: this.model
        })


      }

      if(respuesta.mensaje.existeenpadron){

      
      

        this.formGroup.patchValue({
          numero_documento: this.formGroup.value.numero_documento,
          ape_paterno: respuesta.Apellido_Paterno,
          ape_materno: respuesta.Apellido_Materno,
          nombres: respuesta.Nombres,
          FECHA_NACIMIENTO: this.model
        })


      }


     


      


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
      console.log(this.formGroup.value)


    }

    )
    
  }

  buscarCita(dni: string) {

  }

  actualizar(content) {


    this.modalService.open(content).result.then((result) => {
      let genera_cita = false

     console.log(this.formGroup) 

      this.actulizadata.actualizarData({ ...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente }).subscribe((respuesta) => {

        this.edad_paciente = respuesta.edad
    
        if (this.edad_paciente >= 200) {

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


      this.puntos_vacunacion = puntos.map((punto) => {

        return { nombre_punto: punto._NOMBRE_PUNTO_VACUNACION_, EDAD_CITA: punto.EDAD_CITA }

      })

    })


  }

}
