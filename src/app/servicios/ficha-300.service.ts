import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ficha300 } from '../compartido/interfaces/ficha-300';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Ficha300Service {

  constructor(private http: HttpClient) {


  }

  datoejemplo: Ficha300[] = [{
    "Tipo_Documento": "DNI",
    "Nro_Documento": "72142495",
    "Nombres": "JOSE DELESMIN",
    "Apellido_Paterno": "CHUQUIRUNA",
    "Apellido_Materno": "PAJARES",
    "comun_sexo_paciente": "MASCULINO",
    "Celular": "996608003",
    "Telefono": "",
    "Edad": "19",
    "domicilio_residencia": "",
    "Direccion": "PAMPA ALEGRE",
    "Departamento": "Cajamarca",
    "Provincia": "San Marcos",
    "Distrito": "Pedro Gálvez",
    "Latitud": "-9.189967",
    "Longitud": "-75.015152",
    "Personal_Salud": "NO",
    "Comun_profesion": "",
    "Tiene_Sintomas": "NO",
    "Fecha_Inicio_Sintomas": "",
    "Sintomas_Presenta": "",
    "Tos": "0",
    "Dolor_Garganta": "0",
    "Congestion_Nasal": "0",
    "Dificultad_Respiratoria": "0",
    "Fiebre_Escalofrio": "0",
    "Malestar_General": "0",
    "Diarrea": "0",
    "Nauseas_Vomito": "0",
    "Presenta_Cefalea": "0",
    "Irritabilidad_Confusion": "0",
    "Presenta_Dolor": "0",
    "Presenta_Otros": "0",
    "Dolor_Presenta": "",
    "Dolor_Presenta_Muscular": "0",
    "Dolor_Presenta_Abdominal": "0",
    "Dolor_Presenta_Pecho": "0",
    "Dolor_Presenta_Articulaciones": "0",
    "Dolor_Presenta_Otros": "",
    "Ficha_300_fecha_inicio_sintomas": "",
    "Ficha_300_fecha_toma_muestra": "",
    "Ficha_300_fecha_resultado": "",
    "Ficha_300_numero_dia_seguimiento": "",
    "Ficha_300_fecha_del_seguimiento": "2020-05-26",
    "Ficha_300_tipo_de_monitoreo": "Llamada telefónica",
    "Ficha_300_presion_arterial": "",
    "Ficha_300_frecuencia_cardiaca": "",
    "Ficha_300_frecuencia_respiratoria": "",
    "Ficha_300_temperatura": "",
    "Ficha_300_presenta_sintoma": "NO",
    "Ficha_300_marque_sintomas_que_presenta": "ningun sintoma",
    "Ficha_300_marque_sintomas_que_presenta_tos": "0",
    "Ficha_300_marque_sintomas_que_presenta_dolor_garganta": "0",
    "Ficha_300_marque_sintomas_que_presenta_congestion_nasal": "0",
    "Ficha_300_marque_sintomas_que_presenta_fiebre": "0",
    "Ficha_300_marque_sintomas_que_presenta_malestar_general": "0",
    "Ficha_300_marque_sintomas_que_presenta_dif_respiatoria": "0",
    "Ficha_300_marque_sintomas_que_presenta_diarrea": "0",
    "Ficha_300_marque_sintomas_que_presenta_vomito": "0",
    "Ficha_300_marque_sintomas_que_presenta_cefalea": "0",
    "Ficha_300_marque_sintomas_que_presenta_otro": "0",
    "Ficha_300_sintoma_otro_especificar": "",
    "Ficha_300_marque_signos_alarma_que_presenta": "ningun signo",
    "Ficha_300_marque_signos_alarma_que_presenta_disnea": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_taquipnea": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_saturacion": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_alter_conciencia": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_ninguno": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_otros": "0",
    "Ficha_300_signo_alarma_otro_especificar": "",
    "Ficha_300_evolucion": "favorable",
    "id_registro": "",
    "Ficha_Resultado_prueba_rapida": "",
    "Ficha_fecha_prueba_rapida": "",
    "Comun_documento_paciente": "72142495",
    "Ficha_dni_registrador": "72486832",
    "Ficha_nombres_apellidos_registrador": "MERCEDES MALORY PORTAL LINARES",
    "Procedencia_Resultado_prueba_rapida": "FICHA 100 - 1RA PRUEBA",
    "fecha_registro": "2020-05-27",
    "Ficha_300_egreso": "NO",
    "Ficha_300_condicion_egreso": "",
    "id_ubigeo": "061001",
    "cod_establecimiento": ""

  },
  {
    "Tipo_Documento": "DNI",
    "Nro_Documento": "72142495",
    "Nombres": "JOSE DELESMIN",
    "Apellido_Paterno": "CHUQUIRUNA",
    "Apellido_Materno": "PAJARES",
    "comun_sexo_paciente": "MASCULINO",
    "Celular": "996608003",
    "Telefono": "",
    "Edad": "19",
    "domicilio_residencia": "",
    "Direccion": "PAMPA ALEGRE",
    "Departamento": "Cajamarca",
    "Provincia": "San Marcos",
    "Distrito": "Pedro Gálvez",
    "Latitud": "-9.189967",
    "Longitud": "-75.015152",
    "Personal_Salud": "NO",
    "Comun_profesion": "",
    "Tiene_Sintomas": "NO",
    "Fecha_Inicio_Sintomas": "",
    "Sintomas_Presenta": "",
    "Tos": "0",
    "Dolor_Garganta": "0",
    "Congestion_Nasal": "0",
    "Dificultad_Respiratoria": "0",
    "Fiebre_Escalofrio": "0",
    "Malestar_General": "0",
    "Diarrea": "0",
    "Nauseas_Vomito": "0",
    "Presenta_Cefalea": "0",
    "Irritabilidad_Confusion": "0",
    "Presenta_Dolor": "0",
    "Presenta_Otros": "0",
    "Dolor_Presenta": "",
    "Dolor_Presenta_Muscular": "0",
    "Dolor_Presenta_Abdominal": "0",
    "Dolor_Presenta_Pecho": "0",
    "Dolor_Presenta_Articulaciones": "0",
    "Dolor_Presenta_Otros": "",
    "Ficha_300_fecha_inicio_sintomas": "",
    "Ficha_300_fecha_toma_muestra": "",
    "Ficha_300_fecha_resultado": "",
    "Ficha_300_numero_dia_seguimiento": "",
    "Ficha_300_fecha_del_seguimiento": "2020-05-26",
    "Ficha_300_tipo_de_monitoreo": "Llamada telefónica",
    "Ficha_300_presion_arterial": "",
    "Ficha_300_frecuencia_cardiaca": "",
    "Ficha_300_frecuencia_respiratoria": "",
    "Ficha_300_temperatura": "",
    "Ficha_300_presenta_sintoma": "NO",
    "Ficha_300_marque_sintomas_que_presenta": "ningun sintoma",
    "Ficha_300_marque_sintomas_que_presenta_tos": "0",
    "Ficha_300_marque_sintomas_que_presenta_dolor_garganta": "0",
    "Ficha_300_marque_sintomas_que_presenta_congestion_nasal": "0",
    "Ficha_300_marque_sintomas_que_presenta_fiebre": "0",
    "Ficha_300_marque_sintomas_que_presenta_malestar_general": "0",
    "Ficha_300_marque_sintomas_que_presenta_dif_respiatoria": "0",
    "Ficha_300_marque_sintomas_que_presenta_diarrea": "0",
    "Ficha_300_marque_sintomas_que_presenta_vomito": "0",
    "Ficha_300_marque_sintomas_que_presenta_cefalea": "0",
    "Ficha_300_marque_sintomas_que_presenta_otro": "0",
    "Ficha_300_sintoma_otro_especificar": "",
    "Ficha_300_marque_signos_alarma_que_presenta": "ningun signo",
    "Ficha_300_marque_signos_alarma_que_presenta_disnea": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_taquipnea": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_saturacion": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_alter_conciencia": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_ninguno": "0",
    "Ficha_300_marque_signos_alarma_que_presenta_otros": "0",
    "Ficha_300_signo_alarma_otro_especificar": "",
    "Ficha_300_evolucion": "favorable",
    "id_registro": "",
    "Ficha_Resultado_prueba_rapida": "",
    "Ficha_fecha_prueba_rapida": "",
    "Comun_documento_paciente": "72142495",
    "Ficha_dni_registrador": "72486832",
    "Ficha_nombres_apellidos_registrador": "MERCEDES MALORY PORTAL LINARES",
    "Procedencia_Resultado_prueba_rapida": "FICHA 100 - 1RA PRUEBA",
    "fecha_registro": "2020-05-27",
    "Ficha_300_egreso": "NO",
    "Ficha_300_condicion_egreso": "",
    "id_ubigeo": "061001",
    "cod_establecimiento": ""

  }]
  devolverFicha300PorIdentificacion(TIPO_DOC: string, NRO_DOCUMENTO: string) {
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
   
    var params = new HttpParams({fromObject:{'tipodoc': TIPO_DOC,'dni': NRO_DOCUMENTO}})
  
    return this.http.get<Ficha300[]>(environment.urlBackendSiscovid + 'fichas/getficha300pordocumento', {headers:headers
    , params:params })
  }

  devolverFicha300PorIpresFechas(COD_IPRESS: string, DESDE: string, HASTA: string, tipo_ambito: string, codigo_ambito : string) {
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
   
    var params = new HttpParams({fromObject:{'cod_ipress': COD_IPRESS,'fechaDesde': DESDE,'fechaHasta': HASTA, clase : 'ADM', tipoambito: tipo_ambito,codigoambito : codigo_ambito  }})

  
    return this.http.get<Ficha300[]>(environment.urlBackendSiscovid + 'fichas/getficha300porfechaAmbito', {headers:headers
    , params:params })
  }
  devolverFicha300PorNombres(Nombres:string,Apellido_Paterno:string,Apellido_Materno:string,tipo_ambito: string, codigo_ambito : string){

    var cad = `${Nombres} ${Apellido_Paterno} ${Apellido_Materno}`

    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
    var params = new HttpParams({fromObject:{'nombres': cad, clase : 'ADM', tipoambito: tipo_ambito,codigoambito : codigo_ambito  }});

    return this.http.get<Ficha300[]>(environment.urlBackendSiscovid + 'fichas/getficha300pornombreAmbito', {headers:headers
      , params:params })

  }


  devolverFicha300PorIdentificacionAmbito(TIPO_DOC: string, NRO_DOCUMENTO: string, tipo_ambito: string, codigo_ambito : string) {
    var headers = new HttpHeaders({client_id:environment.siscovid_client_id,client_secret: environment.siscovid_cient_secret});
   
    var params = new HttpParams({fromObject:{'tipodoc': TIPO_DOC,'dni': NRO_DOCUMENTO,tipoambito: tipo_ambito,clase : 'ADM',codigoambito : codigo_ambito}})
  
    return this.http.get<Ficha300[]>(environment.urlBackendSiscovid + 'fichas/getficha300pordocumentoAmbito', {headers:headers
    , params:params })
  }


}
