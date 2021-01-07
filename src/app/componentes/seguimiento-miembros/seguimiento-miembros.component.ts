import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/compartido/interfaces/equipo';
import { EquipoMiembro } from 'src/app/compartido/interfaces/equipoMiembro';
import { MiembroDetalle } from 'src/app/compartido/interfaces/miembroDetalle';
import { EquiposCovidService } from 'src/app/servicios/equipos-covid.service';

@Component({
  selector: 'app-seguimiento-miembros',
  templateUrl: './seguimiento-miembros.component.html',
  styleUrls: ['./seguimiento-miembros.component.scss']
})
export class SeguimientoMiembrosComponent implements OnInit {
  public id_miembro : number
  public equipo : Equipo
  public miembro : EquipoMiembro
  public seguimientos : MiembroDetalle[]
  public mes_registro : string
  public fecha_registro : string
  public nro_int_presencial : number
  public nro_int_remoto : number
  

  constructor(private route: ActivatedRoute, private equipoService: EquiposCovidService, private router : Router) { }


  ngOnInit(): void {
    this.limpiar();
    this.id_miembro = +this.route.snapshot.paramMap.get('id_miembro')
    this.cargarMiembro(_=>{
      if(this.miembro){
        this.cargarEquipo(this.miembro.id_equipo,data=>{
          this.equipo = data;
          this.cargarSeguimientos();
        })
      }
    })
  }

  cargarMiembro(callback) : void{
    this.equipoService.getMiembroId(this.id_miembro).subscribe(resp=>{
      this.miembro = resp;
      callback(resp);
    })
  }

  cargarSeguimientos() : void{
    if(this.miembro){
      this.equipoService.getSeguimientos(this.miembro.id_miembro).subscribe(resp=>{
        this.seguimientos = resp;
      })
    }
  }

  cargarEquipo(id_equipo: number, callback) : void{
    this.equipoService.getEquipos().subscribe(resp=>{
      if(resp){
        this.equipo = resp.filter(e=>e.id_equipo==id_equipo)[0];
        callback(this.equipo);
      } else{
        callback();
      }

    });
  }
  agregarSeguimiento(): void{
    if(this.miembro){
      let detalle : MiembroDetalle = new MiembroDetalle
    detalle.id_miembro = this.miembro.id_miembro;
    detalle.fecha_registro = this.fecha_registro;
    detalle.mes_registro = parseInt(this.mes_registro);
    detalle.nro_int_presencial = this.nro_int_presencial;
    detalle.nro_int_remoto = this.nro_int_remoto;

    this.equipoService.AddSeguimiento(detalle).subscribe(_=>{
      this.cargarSeguimientos();
      this.limpiar();
    })

    }

  }
  eliminarSeguimiento(detalle : MiembroDetalle) : void{
    if(detalle){
      this.equipoService.DeleteSeguimientos(detalle.id_registro).subscribe(_=>{
        this.cargarSeguimientos();
      })
    }
    
  }

  limpiar(): void{
    
    this.mes_registro = "1"
    this.fecha_registro ="2021-01-07"
    this.nro_int_presencial = 0
    this.nro_int_remoto = 0

  }

}
