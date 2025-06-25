import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PosterCardComponent } from '../../shared/components/poster-card/poster-card.component';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
import { RestaurantCardComponent } from '../../shared/components/restaurant-card/restaurant-card.component';
import { DealCardComponent } from '../../shared/components/deal-card/deal-card.component';
import { CommonModule } from '@angular/common';
import { Deal } from '../../shared/models/deal.model';
import { Restaurant } from '../../shared/models/restaurant.model';
import { Category } from '../../shared/models/category.model';
import { RestaurantService } from '../../shared/services/restaurant.service';

@Component({
  selector: 'app-home',
  imports: [PosterCardComponent, CategoryCardComponent, RestaurantCardComponent, DealCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

isTabOneClicked : Boolean = false;
isTabTwoClicked : Boolean = false;
isTabThreeClicked : Boolean = false;
isTabFourClicked : Boolean = false;

dealsFastFood: Deal[] = [];
categories : Category[] = [];
restaurants : Restaurant[] = [];

constructor(private restaurantService : RestaurantService, private router: Router) {}

ngOnInit(): void {
  this.restaurantService.getRestaurants().subscribe( (data)=> {this.restaurants = data});
  this.restaurantService.getCategories().subscribe( (data)=> {this.categories = data});
  this.restaurantService.getFastFoodDeals().subscribe( (data)=> {this.dealsFastFood = data});
}

handleTabOneClick() : void{
  this.isTabOneClicked = true;
  this.isTabTwoClicked = false;
  this.isTabThreeClicked = false;
  this.isTabFourClicked = false;
}

handleTabTwoClick() : void {
  this.isTabOneClicked = false;
  this.isTabTwoClicked = true;
  this.isTabThreeClicked = false;
  this.isTabFourClicked = false;
}

handleTabThreeClick() : void  {
  this.isTabOneClicked = false;
  this.isTabTwoClicked = false;
  this.isTabThreeClicked = true;
  this.isTabFourClicked = false;
}

handleTabFourClick() : void {
  this.isTabOneClicked = false;
  this.isTabTwoClicked = false;
  this.isTabThreeClicked = false;
  this.isTabFourClicked = true;
}

handleRestaurantClick(id: number) : void {
  this.router.navigate(['/restaurants/' + id]);
}

}
