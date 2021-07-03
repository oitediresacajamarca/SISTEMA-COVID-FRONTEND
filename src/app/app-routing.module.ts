import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SelectorSubregionComponent } from './controles/selector-subregion/selector-subregion.component';
import { SelectorRedComponent } from './controles/selector-red/selector-red.component';
import { SelectorMicroredComponent } from './controles/selector-microred/selector-microred.component';
import { SelectorIpressComponent } from './controles/selector-ipress/selector-ipress.component';
import { ReporteSeguimientoComponent } from './componentes/reporte-seguimiento/reporte-seguimiento.component';
import { MonitorSeguimientoComponent } from './componentes/monitor-seguimiento/monitor-seguimiento.component';
import { AdministracionEquiposComponent } from './componentes/administracion-equipos/administracion-equipos.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuardGuard } from './compartido/guards/auth-guard.guard';
import { LayoutPrincipalComponent } from './layouts/layout-principal/layout-principal.component';
import { GeoreferenciaComponent } from './componentes/mapas/georeferencia/georeferencia.component';
import { RegistroEquiposComponent } from './componentes/registro-equipos/registro-equipos.component';
import { IntegrantesEquipoComponent } from './componentes/integrantes-equipo/integrantes-equipo.component';
import { SeguimientoMiembrosComponent } from './componentes/seguimiento-miembros/seguimiento-miembros.component';
import { ReporteSamuComponent } from './componentes/reporte-samu/reporte-samu.component';
import { SeguimientoFamiliarComponent } from './componentes/seguimiento-familiar/seguimiento-familiar.component';
import { VacunacionCovidComponent } from './componentes/vacunacion-covid/vacunacion-covid.component';
import { ValidacionDniComponent } from './componentes/vacunacion-covid/validacion-dni/validacion-dni.component';
import { ModalConfirmacionComponent } from './componentes/vacunacion-covid/modal-confirmacion/modal-confirmacion.component';
import { CitaProgramadaResultadoComponent } from './componentes/vacunacion-covid/cita-programada-resultado/cita-programada-resultado.component';
import { ActualizacionDatoComponent } from './componentes/vacunacion-covid/actualizacion-dato/actualizacion-dato.component';
import { ReniecComponent } from './pruebas/reniec/reniec.component';

const routes: Routes = [


  {
    path:"seguimiento",component:LayoutPrincipalComponent,children:[   
    {path:"busqueda",component:PrincipalComponent,canActivate:[AuthGuardGuard]},
    {path:"reporte",component:ReporteSeguimientoComponent},
    {path:"reporte/:nro_documento",component:ReporteSeguimientoComponent},
    {path:"monitor",component:MonitorSeguimientoComponent,canActivate:[AuthGuardGuard]},
    {path:"admin-equipos",component:AdministracionEquiposComponent,canActivate:[AuthGuardGuard]},
    {path:"registro-equipos", component: RegistroEquiposComponent},
    {path:"integrantes-equipo/:id_equipo", component: IntegrantesEquipoComponent},
    {path:"seguimiento-miembros/:id_miembro",component:SeguimientoMiembrosComponent},
    {path:"reporte-samu", component: ReporteSamuComponent }
    

  ]},
  {path:"mapa",component:GeoreferenciaComponent},
  {path:"reporte",component:ReporteSeguimientoComponent},
  {path:"subregion",component:SelectorSubregionComponent},
  {path:"red",component:SelectorRedComponent},
  {path:"microred",component:SelectorMicroredComponent},
  {path:"ipress",component:SelectorIpressComponent},
  {path:"login",component:LoginComponent},
  {path:"seguimiento-familiar", component: SeguimientoFamiliarComponent},
  {path:"vacunacion-covid", component: VacunacionCovidComponent},
  {path:"validacion-covid", component: ValidacionDniComponent},
  {path:"cita-programada-resultado", component: CitaProgramadaResultadoComponent},
  {path:"datos-actualizados", component: ActualizacionDatoComponent},
  {path:"modal", component: ModalConfirmacionComponent},
  {path:"reniec",component:ReniecComponent}

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
