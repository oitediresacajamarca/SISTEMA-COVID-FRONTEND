import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toasts: any[] = [];

  show(textOrTpl: any | TemplateRef<any>, options: any = {}) {
    console.log(textOrTpl)
  
    this.toasts.push({ ...textOrTpl, ...options });
    
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
