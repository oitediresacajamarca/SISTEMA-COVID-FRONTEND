import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validacion-dni',
  templateUrl: './validacion-dni.component.html',
  styleUrls: ['./validacion-dni.component.scss']
})
export class ValidacionDniComponent implements OnInit {

  constructor(private  formBuilder:FormBuilder) { }

  ngOnInit(): void {


    this.formGroup = this.formBuilder.group({
      numero_documento: '',
      fecha_nacimiento: '',
    
    });
  
  }
  formGroup:FormGroup

  validarDni(){
    console.log(this.formGroup.value)
  }

  
}
