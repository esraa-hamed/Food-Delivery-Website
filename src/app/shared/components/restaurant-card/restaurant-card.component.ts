import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent {
@Input() restaurantName = '';
@Input() imagePath = '';
}
