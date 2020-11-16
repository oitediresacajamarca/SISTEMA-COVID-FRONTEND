import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss']
})
export class LayoutPrincipalComponent implements OnInit {

  public tipo_ambito : string ;
  public codigo_ambito : string;

  constructor(private router:Router,  private logins: LoginService) { }

  ngOnInit(): void {


    //obtener usuario y guardar en session storage
    this.logins.devolverUsuario().subscribe(resp=>{
      sessionStorage.setItem('usuario',JSON.stringify(resp));
      sessionStorage.setItem('tipo_ambito', resp.usuarioAmbito.tipo_ambito)
      sessionStorage.setItem('codigo_ambito', resp.usuarioAmbito.codigo_ambito)
      
      this.tipo_ambito = resp.usuarioAmbito.tipo_ambito;
      this.codigo_ambito = resp.usuarioAmbito.codigo_ambito;
      
      console.log(`usuario: ${JSON.stringify(resp)}`);
    });

  }
  cerrarSesion(){
    localStorage.removeItem("ACCESS_TOKEN")
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('tipo_ambito')
    sessionStorage.removeItem('codigo_ambito')
    this.router.navigate(['login'])
    
      }
}
