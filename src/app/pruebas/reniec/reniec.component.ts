import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reniec',
  templateUrl: './reniec.component.html',
  styleUrls: ['./reniec.component.scss']
})
export class ReniecComponent implements OnInit {

  constructor(private http :HttpClient) { }
  datos

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/inmuno/consultardni/41935041').subscribe(
      (data)=>{
      this.datos=data
      console.log(this.datos)
      
      }

    )
  }

  

}
