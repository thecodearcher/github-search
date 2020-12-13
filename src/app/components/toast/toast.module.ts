import { ToastComponent } from './toast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    NgbToastModule,
    CommonModule
  ],
  exports: [
    ToastComponent
  ]
})
export class ToastModule { }
