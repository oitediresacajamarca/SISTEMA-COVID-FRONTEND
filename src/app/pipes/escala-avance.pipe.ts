import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escalaAvance'
})
export class EscalaAvancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
