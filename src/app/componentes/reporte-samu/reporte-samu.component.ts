import { Component, OnInit } from '@angular/core';
import { Establecimiento } from 'src/app/compartido/interfaces/establecimiento';
import { ReporteSamu } from 'src/app/compartido/interfaces/reporteSamu';
import { FiltrosGeograficosService } from 'src/app/servicios/filtros-geograficos.service';
import { ReporteSamuService } from 'src/app/servicios/reporte-samu.service';

@Component({
  selector: 'app-reporte-samu',
  templateUrl: './reporte-samu.component.html',
  styleUrls: ['./reporte-samu.component.scss']
})
export class ReporteSamuComponent implements OnInit {

  provincias : string[]
  distritos : string[]
  establecimientos : Establecimiento[]
  reporteSamu : ReporteSamu[]

  provinciaSel : string
  distritoSel : string
  establecimientoSel : string

  fechaDesde : string
  fechaHasta : string

  constructor(private fgServ : FiltrosGeograficosService, private reporteSamuService: ReporteSamuService) { }

  ngOnInit(): void {
    this.obtenerProvincias()
    this.provinciaSel = "0"
    this.distritoSel = "0"
    this.establecimientoSel = "0"
    let fechaActual = new Date()
    let fechaDesde = new Date()
    this.fechaHasta = fechaActual.toLocaleDateString("fr-CA")
    fechaDesde.setDate(fechaActual.getDate()-7);
    this.fechaDesde = fechaDesde.toLocaleDateString("fr-CA")


  }

  provinciaChange(){
    this.distritoSel = "0"
    this.obtenerDistritos(this.provinciaSel, _ =>{
      this.distritoChange();
    });
  }

  distritoChange(){
    this.establecimientoSel = "0";
    this.obtenerEstablecimientos(this.provinciaSel, this.distritoSel);
  }

  obtenerEstablecimientos(provincia: string, distrito: string) : void{
    this.fgServ.getEstablecimientos(provincia,distrito).subscribe(resp =>{
      if(resp){
        this.establecimientos = resp;
      }
    })

  }

  obtenerProvincias(callback = null) : void {
    this.fgServ.getProvincias().subscribe(resp=>{
      if(resp){
        this.provincias = resp;
        if(callback) callback();
      }
    })
  }

  obtenerDistritos(provincia : string, callback = null) : void{
    this.fgServ.getDistritos(provincia).subscribe(resp=>{
      if(resp){
        this.distritos = resp;
        if(callback) callback();
      }
    })
  }

  generarReporte(callback= null):void{
    console.log(`establecimiento: ${this.establecimientoSel}`)
    this.reporteSamuService.getReporteSamu(this.provinciaSel,this.distritoSel,this.establecimientoSel, this.fechaDesde, this.fechaHasta)
                            .subscribe(resp=>{
                              this.reporteSamu = resp
                              if(callback) callback();
                            })
    
  }
  exportarExcel():void{
      this.generarReporte(_=>{
        this.generarExcel();
      })  
  }

  generarExcel(){
    if(this.reporteSamu){
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.reporteSamu);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "ReporteCasosPositivos");
      });

    }
    
  }

saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  });
}

}