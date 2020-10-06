import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss']
})
export class LayoutPrincipalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    localStorage.removeItem("ACCESS_TOKEN")
    this.router.navigate(['login'])
    
      }
}
