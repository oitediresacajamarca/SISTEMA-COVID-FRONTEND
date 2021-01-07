import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/compartido/interfaces/equipo';
import { EquiposCovidService } from 'src/app/servicios/equipos-covid.service';

@Component({
  selector: 'app-registro-equipos',
  templateUrl: './registro-equipos.component.html',
  styleUrls: ['./registro-equipos.component.scss']
})
export class RegistroEquiposComponent implements OnInit {

  public equipos : Equipo[]
  public cod_establecimiento : string
  public nombre : string
  public equipoSeleccionado : Equipo
  public flgEditar : boolean

  constructor(private equiposService : EquiposCovidService, private router : Router) { }


  ngOnInit(): void {
    this.obtenerEquipos();

  }

  obtenerEquipos() : void {
    this.equiposService.getEquipos().subscribe(resp=>{
      this.equipos = resp.filter(e=>e.flg_activo==true);
      
    })
  }

  registrarEquipo() : void{

    if(this.flgEditar){
      this.equipoSeleccionado.descripcion = this.nombre;
      this.equipoSeleccionado.cod_establecimiento = parseInt(this.cod_establecimiento);
      this.equiposService.UpdateEquipos(this.equipoSeleccionado).subscribe(_=>{
        this.obtenerEquipos();
      })

    } else{
      let equipo : Equipo = {id_equipo:0, descripcion : this.nombre, flg_activo: true, cod_establecimiento : parseInt(this.cod_establecimiento)};
      this.equiposService.AddEquipos(equipo).subscribe(_=>{
        this.obtenerEquipos();
      });
    }

    this.flgEditar = false;
    this.equipoSeleccionado = null;
    this.nombre = "";
    this.cod_establecimiento = "";

  }

  editarEquipo(equipo: Equipo) :void{
    this.equipoSeleccionado = equipo;
    this.flgEditar = false;
    if(equipo){
      this.nombre = this.equipoSeleccionado.descripcion;
      if(this.equipoSeleccionado.cod_establecimiento == null)
      this.equipoSeleccionado.cod_establecimiento = 0;
      this.cod_establecimiento = this.equipoSeleccionado.cod_establecimiento.toString();
      this.flgEditar = true;
    }    
  }
  eliminarEquipo(equipo: Equipo) :void{
    if(equipo){
      this.equiposService.DeleteEquipos(equipo).subscribe(_=>{
        this.obtenerEquipos();        
      })
    }

  }
  integrantesEquipo(equipo: Equipo) :void{
    if(equipo){
      this.router.navigate([`/seguimiento/integrantes-equipo/${equipo.id_equipo}`]);
    }
  }

}
