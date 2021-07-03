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
import { ToastService } from './toast.service';
import * as Inputmask from 'inputmask';
import { CuposPuntoService } from 'src/app/servicios/vacunacion/cupos-punto.service';
import { ValidadorService } from 'src/app/servicios/vacunacion/validador.service';



@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';


  fromModel(value: any | null): NgbDateStruct | null {


    if (value) {

      if (value.day == undefined) {
        let date = value.split(this.DELIMITER);
        return {
          day: parseInt(date[0], 10),
          month: parseInt(date[1], 10),
          year: parseInt(date[2], 10)
        };
      }
      if (value.day != undefined) {

        return {
          day: value.day,
          month: value.month,
          year: value.year
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
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
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
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
  ]

})
export class VacunacionCovidComponent implements OnInit {
  model: NgbDateStruct;
  model2: NgbDateStruct
  countries: any[];
  constructor(private formBuilder: FormBuilder, private PadronVacunacionServic: PadronVacunacionService, private distritoss: DistritosService,
    private PuntoVacunacionServic: PuntoVacunacionService, private cita: CitaVacunacionService, private modalService: NgbModal
    , private estados: EstadosService, private rout: Router
    , private actulizadata: ActualizacionDataService, private calendar: NgbCalendar,
    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>,
    public toast: ToastService, private cupos_puntos_serv: CuposPuntoService, private validator: ValidadorService) {
    this.minDate = new Date(1900, 1, 1);
    this.maxDate = new Date(2021, 1, 1);
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];



  }
  citas: any[] = []
  edad_descripcion
  vacunas: any = { dosis_programar: 'n', dosis: [] }
  mensaje_dosis = ''
  _keyUp(event: any) {
    const pattern = /[0-9]/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
      // invalid character, prevent input

    }
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
  citaDisponible: boolean = true;
  personaProtegida: boolean = false;
  resetearEstado() {
    this.noExisteEnPadron = false;
    this.citaDisponible = true;
    this.personaProtegida = false;
    this.existeEnPadron = false;

  }

  puntos_vacunacion: any[] = []
  edad_paciente: number;
  existe_padron_act: boolean = false
  FormValidador(form: FormGroup) {

    console.log(form)
    return false;
  }

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
      NUMERO_TELEFONO: ['', [Validators.required]],
      CORREO_ELECTRONICO: [''],
      TIPO_SEGURO: ['', Validators.required],
      TIENE_DISCAPACIDAD: [false, Validators.required],
      DISCAPACIDAD_DESCRIPCION: ['',],
      movilidad: [],
      CITA: [''],
      FECHA_CITA: ['']
    }, { validators: [this.validator.comparisonValidator()] })





    this.citas = []
  }
  existeEnPadron: boolean = false
  cambioFecha() {


  }
  BuscarDnI() {


    this.PadronVacunacionServic.devolverDatos(this.formGroup.value.numero_documento).subscribe((respuesta) => {


      console.log(respuesta)
      this.existeEnPadron = false;

      this.edad_paciente = respuesta.Edad
      this.edad_descripcion = respuesta.edad_descripcion


      if (respuesta.mensaje.existeenhis) {

        let fec = new Date(respuesta.FECHA_NACIMIENTO)
        this.model = { day: fec.getDate(), month: fec.getMonth() + 1, year: fec.getFullYear() }

        this.formGroup.patchValue({
          numero_documento: this.formGroup.value.numero_documento,
          ape_paterno: respuesta.Apellido_Paterno,
          ape_materno: respuesta.Apellido_Materno,
          nombres: respuesta.Nombres,
          FECHA_NACIMIENTO: this.model
        })


      }

      if (respuesta.mensaje.existeenpadron) {


        this.formGroup.patchValue({
          numero_documento: this.formGroup.value.numero_documento,
          ape_paterno: respuesta.Apellido_Paterno,
          ape_materno: respuesta.Apellido_Materno,
          nombres: respuesta.Nombres,
          FECHA_NACIMIENTO: this.model
        })


      }


      if (respuesta.mensaje.en_padron_actual == true) {
        this.existe_padron_act = true
      } else {
        this.existe_padron_act = false
      }





      if (this.edad_paciente >= 70) {
        this.existeEnPadron = true;
        this.noExisteEnPadron = false;
      }
      if (this.edad_paciente >= 55) {
        this.existeEnPadron = true;
        this.noExisteEnPadron = false;
      }
      if (this.edad_paciente < 55) {
        this.existeEnPadron = false;
        this.noExisteEnPadron = true;
      }


      this.citas = respuesta.citas

      this.vacunas = respuesta.vacunas


      if (this.vacunas.dosis_programar == 1) {

        this.mensaje_dosis = 'PRIMERA DOSIS'

      }

      if (this.vacunas.dosis_programar == 2) {

        this.mensaje_dosis = 'SEGUNDA DOSIS'

      }





    }

    )

  }



  validarForm() {

    console.log(this.formGroup2)
    let errors: any[] = Object.keys(this.formGroup2.controls).filter(key => {

      return this.formGroup2.get(key).errors != null
    });


    if (errors.length > 0) {


      if (errors[0] == 'PROVINCIA') {

        this.toast.show({ mensaje: 'DEBE DE SELECIONAR UNA PROVINCIA' })
      }

      if (errors[0] == 'DISTRITO') {

        this.toast.show({ mensaje: 'DEBE DE SELECIONAR UN DISTRITO' })

      }

      if (errors[0] == 'TIPO_VIA') {

        this.toast.show({ mensaje: 'DEBE DE SELECCIONAR UN TIPO DE VIA' })
      }
      if (errors[0] == 'NOMBRE_VIA') {

        this.toast.show({ mensaje: 'DEBE DE SELECCIONAR SU NOMBRE DE VIA DE SU DIRECCION' })
      }

      if (errors[0] == 'NUMERO') {

        this.toast.show({ mensaje: 'DEBE DE INDICAR EL NUMERO DE SU DIRECCION EN CASO DE NO TENER COLOCAR SN' })
      }

      if (errors[0] == 'NOMBRE_PUNTO_VACUNACION') {

        this.toast.show({ mensaje: 'DEBE DE SELECIONAR EL PUNTO DE VACUNACION DONDE DESEA VACUNARSE' })
      }



      if (errors[0] == 'NUMERO_TELEFONO') {

        this.toast.show({ mensaje: 'DEBE DE INDICARNOS UN NUMERO DE TELEFONO' })
      }


      if (errors[0] == 'TIPO_SEGURO') {

        this.toast.show({ mensaje: 'DEBE DE INDICARNOS EL TIPO DE SEGURO QUE POSEE EN CASO DE NO CONTAR INDICAR SIN SEGURO' })
      }






    }



    errors = Object.keys(this.formGroup.controls).filter(key => {

      return this.formGroup.get(key).errors != null
    });


    if (errors.length > 0) {


      if (errors[0] == 'numero_documento' || errors[0] == 'ape_paterno') {

        this.toast.show({ mensaje: 'DEBE DE INGRESAR SU NUMERO DE DOCUMENTO Y HACER CLIC EN BUSCAR' })
      }








    }



  }
  submit() {









  }

  movilidad = false;
  dosis_aplicadas: any = { dosis_programar: 'ninguna' }


  actualizar(content) {

    this.formGroup2.updateValueAndValidity()
    this.validarForm()

    if (this.formGroup2.value.CITA != undefined && this.formGroup2.value.CITA != '') {

      this.formGroup2.value.CITA = this.cupos[this.formGroup2.value.CITA]
    }


    if (this.formGroup2.valid) {


      this.modalService.open(content).result.then((result) => {
        let genera_cita = false



        this.actulizadata.actualizarData({ ...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente }).subscribe((respuesta) => {

          this.edad_paciente = respuesta.edad



          if (this.edad_paciente >= respuesta.punto.EDAD_CITA && respuesta.punto.CITAR_HABILITADO == 'HABILITADO' && this.formGroup2.value.TIENE_DISCAPACIDAD == false) {


            this.cita.citarPaciente({ ...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente }).subscribe((respuesta) => {

              console.log(respuesta)
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


  }

  FILTRAR_DISTRITOS() {



    this.distritoss.devolverDistritosN(this.formGroup2.value.PROVINCIA).subscribe((res) => {

      this.distritos_filtrados = res.map((dato) => {


        return { nombre_distrito: dato.DISTRITO, codigo_distrito: dato.COD_UBIGEO }

      })





    })




  }



  cambio_movilidad(event) {
    this.FITRAR_PUNTOS_VACUNACION()

  }




  async FITRAR_PUNTOS_VACUNACION() {


    this.cambiarValidaciones()



    this.PuntoVacunacionServic.devolverPuntosPorDistrito(this.formGroup2.value.DISTRITO).subscribe(async (puntos) => {

      let punto_filtrado: any[]
      punto_filtrado = puntos.map((punto) => {

        return { nombre_punto: punto._NOMBRE_PUNTO_VACUNACION_, EDAD_CITA: punto.EDAD_CITA, TIPO: punto.TIPO }

      })


      this.puntos_vacunacion = punto_filtrado.filter((punto) => {

        if (this.movilidad == true && punto.TIPO == 'VACUNACAR') {
          return true

        }

        if (this.movilidad == false && punto.TIPO != 'VACUNACAR') {

          return true
        }



      })





    })



  }

  Numeros(event) {//Solo numeros
    var out = '';

    var filtro = '1234567890';//Caracteres validos

    this.formGroup2.controls
    for (var i = 0; i < event.value.length; i++)
      if (filtro.indexOf(event.value.charAt(i)) != -1)

        out += event.value.charAt(i);


    return out;
  }



  selectedCountry: string;
  cupos: any[]


  async seleciono_punto(event) {
    console.log(event)

    let cupos = await this.cupos_puntos_serv.devolver_cupos_disponibles(event.target.value).toPromise()
    this.cupos = cupos;

    this.devolverFechasDisponibles(event.target.value)


  }
  async devolverFechasDisponibles(nombre_punto: string) {



    let fechas_disp = await this.cupos_puntos_serv.devolver_fechas_disponibles(nombre_punto).toPromise()

    this.fechas_disponibles = fechas_disp

  }

  fechas_disponibles: any[]
  cambiarValidaciones() {

    this.formGroup2.updateValueAndValidity()
    /*
    
    
        if(this.formGroup2.controls['TIENE_DISCAPACIDAD'].value==true){
          this.formGroup2.controls['NOMBRE_PUNTO_VACUNACION'].clearValidators()
          
        console.log(this.formGroup2.controls['NOMBRE_PUNTO_VACUNACION'])
          if(this.movilidad==true){
            this.formGroup2.controls['NOMBRE_PUNTO_VACUNACION'].setValidators(Validators.required)
          }
        }else {
          this.formGroup2.controls['NOMBRE_PUNTO_VACUNACION'].setValidators(Validators.required)
        }
    */
  }


}
