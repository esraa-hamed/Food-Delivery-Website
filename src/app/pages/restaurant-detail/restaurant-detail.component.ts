import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../shared/services/restaurant.service';
import { Restaurant } from '../../shared/models/restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  imports: [],
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
    (data) => { this.restaurant = data; }
  )
}
}
