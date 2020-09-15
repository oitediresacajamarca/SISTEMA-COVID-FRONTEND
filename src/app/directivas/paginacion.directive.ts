import { Directive, PipeTransform } from '@angular/core';

@Directive({
  selector: '[appPaginacion]'
})
export class PaginacionDirective implements PipeTransform {

  constructor() { }
  transform(array: any[], page_size:number,page_number:number) {
 
  
  }

}
