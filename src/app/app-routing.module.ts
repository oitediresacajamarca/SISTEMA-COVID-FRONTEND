import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SelectorSubregionComponent } from './controles/selector-subregion/selector-subregion.component';
import { SelectorRedComponent } from './controles/selector-red/selector-red.component';
import { SelectorMicroredComponent } from './controles/selector-microred/selector-microred.component';
import { SelectorIpressComponent } from './controles/selector-ipress/selector-ipress.component';
import { ReporteSeguimientoComponent } from './componentes/reporte-seguimiento/reporte-seguimiento.component';
import { MonitorSeguimientoComponent } from './componentes/monitor-seguimiento/monitor-seguimiento.component';


const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"seguimiento",component:PrincipalComponent},
  {path:"subregion",component:SelectorSubregionComponent},
  {path:"red",component:SelectorRedComponent},
  {path:"microred",component:SelectorMicroredComponent},
  {path:"ipress",component:SelectorIpressComponent},
  {path:"reporte",component:ReporteSeguimientoComponent},
  {path:"reporte/:nro_documento",component:ReporteSeguimientoComponent},
  {path:"monitor",component:MonitorSeguimientoComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
