import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorFondoCalsificacion]'
})
export class ColorFondoCalsificacionDirective {

  @Input('appColorFondoCalsificacion') appColorFondoCalsificacion='SOSPECHOSO'

  constructor(private element:ElementRef) { 

  }

  

}
