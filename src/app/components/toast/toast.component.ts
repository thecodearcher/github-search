import { ToastService } from '@services/toast/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  get toasts(): Array<{ body: string }> {
    return this.toastService.toasts;
  }

  close(body: string): void {
    this.toastService.remove(body);
  }

}
