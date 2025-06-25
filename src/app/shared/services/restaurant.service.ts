import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant.model';
import { Category } from '../models/category.model';
import { Deal } from '../models/deal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  // ---------- Deals -----------------

  getFastFoodDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>(this.baseUrl + "/fastFoodDeals");
  }

  // ---------- Categories -----------------

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + "/categories");
  }

  // ---------- Restaurants -----------------

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + "/restaurants");
  }

  getRestaurantByID(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseUrl + "/restaurants/" + id);
  }


  // ----------  -----------------
}
