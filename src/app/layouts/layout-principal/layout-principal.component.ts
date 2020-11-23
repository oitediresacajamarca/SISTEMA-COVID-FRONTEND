import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss']
})
export class LayoutPrincipalComponent implements OnInit {

  constructor(private router:Router,  private logins: LoginService) { }

  ngOnInit(): void {


    //obtener usuario y guardar en session storage
  
  }
  cerrarSesion(){
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem('usuario')
    localStorage.removeItem('tipo_ambito')
    localStorage.removeItem('codigo_ambito')
    this.router.navigate(['login'])
    
      }
}
