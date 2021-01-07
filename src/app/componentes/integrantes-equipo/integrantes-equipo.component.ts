import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/compartido/interfaces/equipo';
import { EquipoMiembro } from 'src/app/compartido/interfaces/equipoMiembro';
import { EquiposCovidService } from 'src/app/servicios/equipos-covid.service';

@Component({
  selector: 'app-integrantes-equipo',
  templateUrl: './integrantes-equipo.component.html',
  styleUrls: ['./integrantes-equipo.component.scss']
})
export class IntegrantesEquipoComponent implements OnInit {

  public id_equipo : number
  public equipo : Equipo
  public miembros : EquipoMiembro[]
  public miembroSeleccionado : EquipoMiembro
  public flgEditar : boolean
  
  public nombres : string
  public profesion : string
  public tipo_documento : string
  public nro_documento : string
  public telefono: string
  public email : string
  public tipo_seguimiento : string

  public mensajeError : string
  public mensajeConfirmacion : string

  constructor(private route: ActivatedRoute, private equipoService: EquiposCovidService, private router : Router) { }

  ngOnInit(): void {
    this.id_equipo = +this.route.snapshot.paramMap.get('id_equipo')
    this.cargarEquipo(_=>{
      this.cargarMiembros();
    })
    this.limpiar();

  }

  cargarEquipo(callback) : void{
    this.equipoService.getEquipos().subscribe(resp=>{
      if(resp){
        this.equipo = resp.filter(e=>e.id_equipo==this.id_equipo)[0];
        callback(this.equipo);
      } else{
        callback();
      }

    });
  }

  cargarMiembros() : void{
    if(this.equipo){
      this.equipoService.getMiembros(this.equipo.id_equipo).subscribe(resp=>{
        if(resp){
          this.miembros = resp.filter(m=>m.flg_activo==true);
        }
      });
    }
  }

  addMiembro() : void{
    if(this.equipo && this.nombres && this.nro_documento){
      if(this.flgEditar){
        this.miembroSeleccionado.nombres = this.nombres;
        this.miembroSeleccionado.email = this.email;
        this.miembroSeleccionado.nro_documento = this.nro_documento;
        this.miembroSeleccionado.profesion = this.profesion;
        this.miembroSeleccionado.telefono = this.telefono;
        this.miembroSeleccionado.tipo_documento = this.tipo_documento;
        this.miembroSeleccionado.tipo_seguimiento = this.tipo_seguimiento;

        this.equipoService.UpdateMiembro(this.miembroSeleccionado).subscribe(_=>{
          this.cargarMiembros();
          this.limpiar();
          this.miembroSeleccionado = null;
        })


      } else{

        let miembro : EquipoMiembro = new EquipoMiembro();
        miembro.id_equipo = this.equipo.id_equipo;
        miembro.flg_activo = true;
        miembro.nombres = this.nombres;
        miembro.email = this.email;
        miembro.nro_documento = this.nro_documento;
        miembro.profesion = this.profesion;
        miembro.telefono = this.telefono;
        miembro.tipo_documento = this.tipo_documento;
        miembro.tipo_seguimiento = this.tipo_seguimiento;

        this.equipoService.AddMiembro(miembro).subscribe(_=>{
          this.cargarMiembros();
          this.limpiar();
        })

    }

    } else{
      this.mensajeError = "Debe completar los campos obligatorios";
      this.mensajeConfirmacion = null;
    }
    

  }
  editarMiembro(miembro: EquipoMiembro){
    if(miembro){
      this.miembroSeleccionado = miembro;
      this.flgEditar = true;

      this.nombres = miembro.nombres;
      this.email = miembro.email;
      this.nro_documento = miembro.nro_documento;
      this.profesion = miembro.profesion;
      this.telefono = miembro.telefono;
      this.tipo_documento = miembro.tipo_documento;
      this.tipo_seguimiento = miembro.tipo_seguimiento;



    }

  }
  eliminarMiembro(miembro: EquipoMiembro){
    if(miembro){
      this.equipoService.DeleteMiembro(miembro).subscribe(_=>{
        this.cargarMiembros();
      })
    }

  }
  seguimientos(miembro: EquipoMiembro){
    if(miembro){
      this.router.navigate([`/seguimiento/seguimiento-miembros/${miembro.id_miembro}`]);
    }
  }

  limpiar() : void{
      this.nombres = "";
      this.email = "";
      this.nro_documento = "";
      this.profesion = "";
      this.telefono = "";
      this.tipo_documento = "DNI";
      this.tipo_seguimiento = "PRESENCIAL";

      this.mensajeError = "";
      this.mensajeConfirmacion = "";

  }



}
