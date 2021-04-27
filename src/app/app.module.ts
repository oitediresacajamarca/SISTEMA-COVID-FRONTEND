import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PanelBusquedaComponent } from './componentes/panel-busqueda/panel-busqueda.component';
import { PanelResultadosComponent } from './componentes/panel-resultados/panel-resultados.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import {GMapModule} from 'primeng/gmap';



import { ReactiveFormsModule } from '@angular/forms';

import { SelectorSubregionComponent } from './controles/selector-subregion/selector-subregion.component';
import { SelectorRedComponent } from './controles/selector-red/selector-red.component';
import { SelectorMicroredComponent } from './controles/selector-microred/selector-microred.component';
import { SelectorIpressComponent } from './controles/selector-ipress/selector-ipress.component';
import { SelectorIpressCompletoHorizontalComponent } from './controles/selector-ipress-completo-horizontal/selector-ipress-completo-horizontal.component';
import { ReporteSeguimientoComponent } from './componentes/reporte-seguimiento/reporte-seguimiento.component';
import { EncabesadoComponent } from './componentes/reporte-seguimiento/encabesado/encabesado.component';
import { PruebasRapidasDetalleComponent } from './componentes/reporte-seguimiento/pruebas-rapidas-detalle/pruebas-rapidas-detalle.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EstadosPruebaRapidaComponent } from './componentes/reporte-seguimiento/pruebas-rapidas-detalle/estados-prueba-rapida/estados-prueba-rapida.component';
import { SeguimientoEpidemiologicoComponent } from './componentes/reporte-seguimiento/seguimiento-epidemiologico/seguimiento-epidemiologico.component';
import { SeguimientoClinicoComponent } from './componentes/reporte-seguimiento/seguimiento-clinico/seguimiento-clinico.component';
import { BaseNotiComponent } from './componentes/reporte-seguimiento/base-noti/base-noti.component';
import { HospitalizacionComponent } from './componentes/reporte-seguimiento/hospitalizacion/hospitalizacion.component';
import { BusquedaPorNombreComponent } from './componentes/panel-busqueda/busqueda-por-nombre/busqueda-por-nombre.component';
import { ColorFondoCalsificacionDirective } from './directivas/color-fondo-calsificacion.directive';
import { BusquedaPorIdentificacionComponent } from './componentes/panel-busqueda/busqueda-por-identificacion/busqueda-por-identificacion.component';
import { EstadoRegistroCovidComponent } from './componentes/reporte-seguimiento/encabesado/estado-registro-covid/estado-registro-covid.component';
import { SinadefComponent } from './componentes/reporte-seguimiento/sinadef/sinadef.component';
import { Ficha00Component } from './componentes/reporte-seguimiento/ficha00/ficha00.component';
import { ContactosComponent } from './componentes/reporte-seguimiento/contactos/contactos.component';
import { MonitorSeguimientoComponent } from './componentes/monitor-seguimiento/monitor-seguimiento.component';
import { PaginacionDirective } from './directivas/paginacion.directive';
import { PaginacionPipe } from './pipes/paginacion.pipe';
import { BooleanosPipe } from './pipes/booleanos.pipe';


import { ChartModule } from 'primeng/chart';
import { AdministracionEquiposComponent } from './componentes/administracion-equipos/administracion-equipos.component';
import { EscalaAvancePipe } from './pipes/escala-avance.pipe';
import { EscalaAvanceDirectivaDirective } from './directivas/escala-avance-directiva.directive';
import { NuevoEquipoComponent } from './componentes/administracion-equipos/nuevo-equipo/nuevo-equipo.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './componentes/login/login.component';
import { LayoutPrincipalComponent } from './layouts/layout-principal/layout-principal.component';
import { GeoreferenciaComponent } from './componentes/mapas/georeferencia/georeferencia.component';
import { GeoreferenciasUbicacionesFallecidosComponent } from './componentes/mapas/georeferencias-ubicaciones-fallecidos/georeferencias-ubicaciones-fallecidos.component';
import { GeoreferenciasUbicacionesPositivasComponent } from './componentes/mapas/georeferencias-ubicaciones-positivas/georeferencias-ubicaciones-positivas.component';
import { SelectorGeograficoVerticalMaterialComponent } from './controles/selector-geografico-vertical-material/selector-geografico-vertical-material.component';
import { EntregaMedicamentosComponent } from './componentes/reporte-seguimiento/seguimiento-clinico/entrega-medicamentos/entrega-medicamentos.component';
import { LoaderComponent } from './componentes/loader/loader.component';
import { LoaderService } from './servicios/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { RegistroEquiposComponent } from './componentes/registro-equipos/registro-equipos.component';
import { IntegrantesEquipoComponent } from './componentes/integrantes-equipo/integrantes-equipo.component';
import { SeguimientoMiembrosComponent } from './componentes/seguimiento-miembros/seguimiento-miembros.component';
import { ReporteSamuComponent } from './componentes/reporte-samu/reporte-samu.component';
import { SeguimientoFamiliarComponent } from './componentes/seguimiento-familiar/seguimiento-familiar.component';
import { SeguimientoFamiliarDesign2Component } from './componentes/seguimiento-familiar-design2/seguimiento-familiar-design2.component';
import { VacunacionCovidComponent } from './componentes/vacunacion-covid/vacunacion-covid.component';
import { ValidacionDniComponent } from './componentes/vacunacion-covid/validacion-dni/validacion-dni.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PanelBusquedaComponent,
    PanelResultadosComponent,
    SelectorSubregionComponent,
    SelectorRedComponent,
    SelectorMicroredComponent,
    SelectorIpressComponent,
    SelectorIpressCompletoHorizontalComponent,
    ReporteSeguimientoComponent,
    EncabesadoComponent,
    PruebasRapidasDetalleComponent,
    EstadosPruebaRapidaComponent,
    SeguimientoEpidemiologicoComponent,
    SeguimientoClinicoComponent,
    BaseNotiComponent,
    HospitalizacionComponent,
    BusquedaPorNombreComponent,
    ColorFondoCalsificacionDirective,
    BusquedaPorIdentificacionComponent,
    EstadoRegistroCovidComponent,
    SinadefComponent,
    Ficha00Component,
    ContactosComponent,
    MonitorSeguimientoComponent,
    PaginacionDirective,
    PaginacionPipe,
    BooleanosPipe,
    AdministracionEquiposComponent,
    EscalaAvancePipe,
    EscalaAvanceDirectivaDirective,
    NuevoEquipoComponent,
    LoginComponent,
    LayoutPrincipalComponent,
    GeoreferenciaComponent,
    GeoreferenciasUbicacionesFallecidosComponent,
    GeoreferenciasUbicacionesPositivasComponent,
    SelectorGeograficoVerticalMaterialComponent,
    EntregaMedicamentosComponent,
    LoaderComponent,
    RegistroEquiposComponent,
    IntegrantesEquipoComponent,
    SeguimientoMiembrosComponent,
    ReporteSamuComponent,
    SeguimientoFamiliarComponent,
    SeguimientoFamiliarDesign2Component,
    VacunacionCovidComponent,
    ValidacionDniComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatDatepickerModule, MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTabsModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    DragDropModule,
    ChartModule,
    MatDialogModule,
    ModalModule.forRoot(),
    GMapModule,
    MatProgressSpinnerModule 

  ],
  providers: [
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
