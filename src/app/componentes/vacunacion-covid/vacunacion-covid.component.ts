import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DistritosService } from 'src/app/servicios/distritos.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { ActualizacionDataService } from 'src/app/servicios/vacunacion/aactualizacion-data.service';
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
    private PuntoVacunacionServic: PuntoVacunacionService, private cita: CitaVacunacionService, private modalService: NgbModal
    , private estados: EstadosService, private rout: Router
    ,private actulizadata:ActualizacionDataService) {


  }
  formGroup: FormGroup;
  formGroup2: FormGroup;
  distritos_filtrados: any[] = []
  noExisteEnPadron:boolean=false;
  citaDisponible:boolean=false;
  personaProtegida:boolean=false;
  resetearEstado(){
    this.noExisteEnPadron=false;
    this.citaDisponible=false;
    this.personaProtegida=false;
    this.existeEnPadron=false;


  }

  puntos_vacunacion: any[] = []
  edad_paciente: number;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      numero_documento: ['',Validators.required],
      ape_paterno: ['',Validators.required],
      ape_materno: ['',Validators.required],
      nombres: ['',Validators.required],
      fecha_nacimiento:['',Validators.required]

    });
    this.formGroup2 = this.formBuilder.group({
      PROVINCIA: ['',Validators.required],
      DISTRITO: ['',Validators.required],
      TIPO_VIA: ['',Validators.required],
      NOMBRE_VIA: ['',Validators.required],
      NUMERO: ['',Validators.required],
      REFERENCIA: '',
      NOMBRE_PUNTO_VACUNACION: ['',Validators.required],
      NUMERO_TELEFONO: ['',Validators.required],
      CORREO_ELECTRONICO: ['',Validators.required],
      TIPO_SEGURO: ['',Validators.required],
      TIENE_DISCAPACIDAD: [false,Validators.required]

    });
  }
  existeEnPadron: boolean = false
  BuscarDnI() {
    this.resetearEstado()

    this.PadronVacunacionServic.devolverDatos(this.formGroup.value.numero_documento).subscribe((respuesta) => {

     console.log(respuesta)
      if (respuesta.mensaje != 'no existe en padron') {

        this.existeEnPadron = true
        this.edad_paciente = respuesta.Edad


        this.formGroup.setValue({
          numero_documento: this.formGroup.value.numero_documento,
          ape_paterno: respuesta.Apellido_Paterno,
          ape_materno: respuesta.Apellido_Materno,
          nombres: respuesta.Nombres
        })

      }
      else {
        this.existeEnPadron=false;
        this.noExisteEnPadron=true;
      }


    }

    )


  }

  buscarCita(dni:string){

  }

  actualizar(content) {
 


    this.modalService.open(content).result.then((result) => {
      let genera_cita = false

      this.actulizadata.actualizarData({...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente}).subscribe((respuesta)=>{
        console.log(respuesta)
       this.edad_paciente=respuesta.edad
      })

if(this.edad_paciente>=80){

      this.cita.citarPaciente({ ...this.formGroup2.value, ...this.formGroup.value, edad: this.edad_paciente }).subscribe((respuesta) => {
        Object.assign(this.estados.citapro, respuesta)

        this.rout.navigate(['/cita-programada-resultado'])
        console.log(respuesta)
      })
    }else{




      this.rout.navigate(['/datos-actualizados'])
    }



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

    console.log(this.formGroup2.value)


    this.PuntoVacunacionServic.devolverPuntosPorDistrito(this.formGroup2.value.DISTRITO).subscribe((puntos) => {

      this.puntos_vacunacion = puntos.map((punto) => {

        return { nombre_punto: punto._NOMBRE_PUNTO_VACUNACION_ }

      })

    })


  }

}
