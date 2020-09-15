import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(array: any[],page_number:number,page_size:number): any[] {

if(array.length==0){
  return []
}
    return     array.slice(page_number*page_size,(page_number+1)*page_size)
  }

}
