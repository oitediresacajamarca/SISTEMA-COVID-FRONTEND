import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanos'
})
export class BooleanosPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): String {
    let trans = 'No Tiene'

    if (value == true) {
      trans = 'Si Tiene'
    } else {

      trans = 'No Tiene'
    }
    return trans;
  }

}
