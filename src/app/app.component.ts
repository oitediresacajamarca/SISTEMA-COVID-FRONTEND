import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-covid-frontend';
constructor(private router:Router){

}
  cerrarSesion(){
localStorage.removeItem("ACCESS_TOKEN")
this.router.navigate(['login'])

  }
}
