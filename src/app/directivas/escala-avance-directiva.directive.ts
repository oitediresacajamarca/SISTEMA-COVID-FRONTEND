import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEscalaAvanceDirectiva]'
})
export class EscalaAvanceDirectivaDirective {

  @Input('appEscalaAvanceDirectiva') num_seguimiento: number

  constructor(private elemento: ElementRef, private render: Renderer2) {

    console.log(this.num_seguimiento)
    if (this.num_seguimiento <= 5) {
      this.render.addClass(this.elemento, 'bg-danger')
    }
    if (this.num_seguimiento <= 10 && this.num_seguimiento > 5) {

      this.render.addClass(this.elemento, 'bg-warning')
    }

    if (this.num_seguimiento <= 15 && this.num_seguimiento > 10) {

      this.render.addClass(this.elemento, 'bg-secundary')
    }

  }



}
