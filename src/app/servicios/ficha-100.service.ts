import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ficha100 } from '../compartido/interfaces/ficha-100';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Ficha100Service {
  ejemplo: Ficha100[]


  constructor(private http: HttpClient) {
    this.ejemplo = [
      {
        "Tipo_Documento": "DNI",
        "Nro_Documento": "40018635",
        "nombres": "GUILLERMO VICTOR",
        "Apellido_Paterno": "MALDONADO",
        "Apellido_Materno": "LOZADA",
        "comun_sexo_paciente": "MASCULINO",
        "Celular": "957552139",
        "Teléfono": "957552139",
        "Edad": 41,
        "domicilio_residencia": "INFORMACIÓN DE DOMICILIO",
        "Direccion": "JR 22 DE OCTUBRE 1645",
        "Departamento": "Cajamarca",
        "Provincia": "Cutervo",
        "Distrito": "Cutervo",
        "Latitud": -9.751756799999999,
        "Longitud": -76.7131648,
        "Personal_Salud": "",
        "Comun_profesion": "",
        "Tiene_Sintomas": "NO",
        "Fecha_Inicio_Sintomas": "",
        "Sintomas_Presenta": "",
        "Tos": false,
        "Dolor_Garganta": false,
        "Congestion_Nasal": false,
        "Dificultad_Respiratoria": false,
        "Fiebre_Escalofrio": false,
        "Malestar_General": false,
        "Diarrea": false,
        "Nauseas_Vomito": false,
        "Presenta_Cefalea": false,
        "Irritabilidad_Confusion": false,
        "Presenta_Dolor": false,
        "Presenta_Otros": false,
        "Dolor_Presenta": false,
        "Dolor_Presenta_Muscular": false,
        "Dolor_Presenta_Abdominal": false,
        "Dolor_Presenta_Pecho": false,
        "Dolor_Presenta_Articulaciones": false,
        "Dolor_Presenta_Otros": "",
        "Fecha_Ejecucuion_Prueba_Rapida": new Date(),
        "Procedencia_Solicitud_Diagnostico": "otro_priorizado",
        "Resultado": "No Reactivo",
        "Fotografia_Prueba_Rapida": "",
        "Resultado_Segunda_Prueba": "",
        "Fotografia_Segunda_Prueba_Rapida": "",
        "Clasificacion_Clinica_Severidad": "asintomatico",
        "Riesgo": "",
        "Riesgo_Personal_Salud": false,
        "Riesgo_Obesidad": false,
        "Riesgo_Enf_Pulmonar_Cronica": false,
        "Riesgo_Diabetes": false,
        "Riesgo_Hipertension_Arterial": false,
        "Riesgo_Enf_Tratinmuno": false,
        "Riesgo_Cancer": false,
        "Riesgo_Embarazo": false,
        "Riesgo_Mayor_60_Anios": false,
        "Riesgo_Ninguna": true,

        "Riesgo_Asma": false,
        "Riesgo_Renal_Cronica": false,
        "Registrador": "JUAN BERNABE VILCHEZ CORONEL",
        "Doc_Registrador": "27289812",
        "GeresaDiresaDiris": "CAJAMARCA",

        "Aplicara_PCR": "",
        "Observacion": "",

        "Resultado1": "No Reactivo",
        "Fecha_Prueba": "2020-08-13",
        "Usuario_Kobo": "25159",
        "Usuario": "27289812",
        "Nombres_Usuario": "JUAN BERNABE",
        "Apellidos_Usuario": "VILCHEZ CORONEL",
        "Correo_Usuario": "",
        "nom_reniec": "",
        "apep_reniec": "",
        "apem_reniec": "",
        "sexo_reniec": "",
        "fecha_nac_reniec": "",
        "dir_reniec": "",
        "dep_reniec": "",
        "prov_reniec": "",
        "dist_reniec": "",
        "ubigeo_reniec": "",
        "fecha_registro": "2020-08-14",
        "TipoConglomerado": "",
        "Conglomerado": "",
        "id_ubigeo": "060601",
        "cod_establecimiento": "781821",
        "etnia": "Mestizo"
      },
      {
        "Tipo_Documento": "DNI",
        "Nro_Documento": "40034273",
        "nombres": "VICKY MELISSA",
        "Apellido_Paterno": "AGUIRRE",
        "Apellido_Materno": "PAREDES",
        "comun_sexo_paciente": "FEMENINO",
        "Celular": "996161314",
        "Teléfono": "996161314",
        "Edad": 41,
        "domicilio_residencia": "INFORMACIÓN DE DOMICILIO",
        "Direccion": "Av. 28 de Julio 306",
        "Departamento": "Cajamarca",
        "Provincia": "San Marcos",
        "Distrito": "Pedro Gálvez",
        "Latitud": -7.3358384,
        "Longitud": -78.167143,
        "Personal_Salud": "NO",
        "Comun_profesion": "",
        "Tiene_Sintomas": "NO",
        "Fecha_Inicio_Sintomas": "",
        "Sintomas_Presenta": "",
        "Tos": false,
        "Dolor_Garganta": false,
        "Congestion_Nasal": false,
        "Dificultad_Respiratoria": false,
        "Fiebre_Escalofrio": false,
        "Malestar_General": false,
        "Diarrea": false,
        "Nauseas_Vomito": false,
        "Presenta_Cefalea": false,
        "Irritabilidad_Confusion": false,
        "Presenta_Dolor": true,
        "Presenta_Otros": false,
        "Dolor_Presenta": true,
        "Dolor_Presenta_Muscular": true,
        "Dolor_Presenta_Abdominal": false,
        "Dolor_Presenta_Pecho": false,
        "Dolor_Presenta_Articulaciones": false,
        "Dolor_Presenta_Otros": "",
        "Fecha_Ejecucuion_Prueba_Rapida": new Date(),
        "Procedencia_Solicitud_Diagnostico": "Contacto con caso confirmado",
        "Resultado": "IgM Reactivo",
        "Fotografia_Prueba_Rapida": "",
        "Resultado_Segunda_Prueba": "",
        "Fotografia_Segunda_Prueba_Rapida": "",
        "Clasificacion_Clinica_Severidad": "asintomatico",
        "Riesgo": "",
        "Riesgo_Personal_Salud": false,
        "Riesgo_Obesidad": false,
        "Riesgo_Enf_Pulmonar_Cronica": false,
        "Riesgo_Diabetes": false,
        "Riesgo_Hipertension_Arterial": false,
        "Riesgo_Enf_Tratinmuno": false,
        "Riesgo_Cancer": false,
        "Riesgo_Embarazo": true,
        "Riesgo_Mayor_60_Anios": false,
        "Riesgo_Ninguna": true,
        "Riesgo_EnfCardiovascular": false,
        "Riesgo_Asma": false,
        "Riesgo_Renal_Cronica": false,
        "Registrador": "WILLIAM NIZAMA LOZANO",
        "Doc_Registrador": "43669229",
        "GeresaDiresaDiris": "CAJAMARCA",

        "Aplicara_PCR": "",
        "Observacion": "",

        "Resultado1": "IgM Reactivo",
        "Fecha_Prueba": "2020-08-13",
        "Usuario_Kobo": "4271",
        "Usuario": "43669229",
        "Nombres_Usuario": "WILLIAM",
        "Apellidos_Usuario": "NIZAMA LOZANO",
        "Correo_Usuario": "",
        "nom_reniec": "",
        "apep_reniec": "",
        "apem_reniec": "",
        "sexo_reniec": "",
        "fecha_nac_reniec": "",
        "dir_reniec": "",
        "dep_reniec": "",
        "prov_reniec": "",
        "dist_reniec": "",
        "ubigeo_reniec": "",
        "fecha_registro": "2020-08-14",
        "TipoConglomerado": "",
        "Conglomerado": "",
        "id_ubigeo": "061001",
        "cod_establecimiento": "02781222",
        "etnia": "Mestizo"
      },

  
    ]
  }
  devolverFicha100porIdentificacion(TIPO_DOC: string, NUM_DOC: string) {
    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});
   
    var params = new HttpParams({fromObject:{'tipodoc': TIPO_DOC,'dni': NUM_DOC}})
  

   return this.http.get<Ficha100[]>(environment.urlBackendSiscovid+'fichas/getficha100pordocumento',{headers,params})

  }

  devolverFicha100porNombres(Nombres: string, Apellido_Pat: string,Apellido_Mat:string) {

    var headers = new HttpHeaders({client_id:'diresa_seguimiento',client_secret: 'WrCcm69SZOVZpUpnYuq4'});   
    var params = new HttpParams({fromObject:{'nombres':'%'+Nombres+'%'+Apellido_Pat+'%'+Apellido_Mat+'%'}}) 

   return this.http.get<Ficha100[]>(environment.urlBackendSiscovid+'fichas/getficha100pornombre',{headers,params})

    

  }

}
