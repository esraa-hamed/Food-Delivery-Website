import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
@Component({
  selector: 'app-rd-poster-card',
  imports: [CommonModule],
  templateUrl: './rd-poster-card.component.html',
  styleUrl: './rd-poster-card.component.scss'
})
export class RdPosterCardComponent{

  @Input() name : string = '';
  @Input() slogan: string = '';
  @Input() minOrder: number = 0;
  @Input() minDeliveryTime: number = 0; 
  @Input() maxDeliveryTime: number = 0;  
  @Input() rating: number = 0; 
  @Input() numReviews: number = 0; 
  @Input() closingTime: number = 0; 
  @Input() imagePath: string = '';
  @Input() bgImagePath : string = '';

}
