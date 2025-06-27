import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../shared/services/restaurant.service';
import { Restaurant } from '../../shared/models/restaurant.model';
import { RdPosterCardComponent } from '../../shared/components/rd-poster-card/rd-poster-card.component';
import { CommonModule } from '@angular/common';
import { DealCardComponent } from '../../shared/components/deal-card/deal-card.component';
@Component({
  selector: 'app-restaurant-detail',
  imports: [RdPosterCardComponent, CommonModule, DealCardComponent],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.scss'
})
export class RestaurantDetailComponent implements OnInit{

  restaurantId !: number ;
  restaurant !: Restaurant;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService){}

ngOnInit(): void {
  this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));

  this.restaurantService.getRestaurantByID(this.restaurantId).subscribe(
    (data) => { this.restaurant = data; console.log(data.posterBackgroundImage);
    }
  )
}
}
