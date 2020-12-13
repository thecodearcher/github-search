import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: Array<{ body: string }> = [];

  show(body: string): void {
    this.toasts.push({ body });
  }

  remove(body: string): void {
    this.toasts = this.toasts.filter(t => t.body !== body);
  }
}
