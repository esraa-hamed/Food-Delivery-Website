import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deal-card',
  imports: [CommonModule],
  templateUrl: './deal-card.component.html',
  styleUrl: './deal-card.component.scss'
})
export class DealCardComponent {
@Input() restaurantName : string= '';
@Input() imagePath : string = '';
@Input() percentage : number = 0;
@Input() dealName: string = '';
}
