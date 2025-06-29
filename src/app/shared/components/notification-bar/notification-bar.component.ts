import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-bar',
  imports: [],
  templateUrl: './notification-bar.component.html',
  styleUrl: './notification-bar.component.scss'
})
export class NotificationBarComponent {
  @Input() numItems : number = 0;
  @Input() totalPrice : number = 0;
}
