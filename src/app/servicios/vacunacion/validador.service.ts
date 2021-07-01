import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {


  constructor() { }
 
  public comparisonValidator() : ValidatorFn{

    return (group: FormGroup): ValidationErrors => {
 
      if(group.controls['TIENE_DISCAPACIDAD'].value==true){
        group.controls['NOMBRE_PUNTO_VACUNACION'].setErrors(null)
        

        if(group.controls['movilidad'].value==true){
          console.log( group.controls['NOMBRE_PUNTO_VACUNACION'])
          if( group.controls['NOMBRE_PUNTO_VACUNACION'].value==''){
            group.controls['NOMBRE_PUNTO_VACUNACION'].setErrors({required:true})
          }else{
            group.controls['NOMBRE_PUNTO_VACUNACION'].setErrors(null)
          }

       
        }
      }else {
        if( group.controls['NOMBRE_PUNTO_VACUNACION'].value==''){
          group.controls['NOMBRE_PUNTO_VACUNACION'].setErrors({required:true})
        }else{
          group.controls['NOMBRE_PUNTO_VACUNACION'].setErrors(null)
        }
      }
       return;
 };
}
}