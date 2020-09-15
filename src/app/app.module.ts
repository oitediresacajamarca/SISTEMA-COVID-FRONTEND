import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PanelBusquedaComponent } from './componentes/panel-busqueda/panel-busqueda.component';
import { PanelResultadosComponent } from './componentes/panel-resultados/panel-resultados.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { ReactiveFormsModule } from '@angular/forms';

import { SelectorSubregionComponent } from './controles/selector-subregion/selector-subregion.component';
import { SelectorRedComponent } from './controles/selector-red/selector-red.component';
import { SelectorMicroredComponent } from './controles/selector-microred/selector-microred.component';
import { SelectorIpressComponent } from './controles/selector-ipress/selector-ipress.component';
import { SelectorIpressCompletoHorizontalComponent } from './controles/selector-ipress-completo-horizontal/selector-ipress-completo-horizontal.component';
import { ReporteSeguimientoComponent } from './componentes/reporte-seguimiento/reporte-seguimiento.component';
import { EncabesadoComponent } from './componentes/reporte-seguimiento/encabesado/encabesado.component';
import { PruebasRapidasDetalleComponent } from './componentes/reporte-seguimiento/pruebas-rapidas-detalle/pruebas-rapidas-detalle.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
    MatDatepickerModule,MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTabsModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
