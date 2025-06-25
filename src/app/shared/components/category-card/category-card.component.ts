import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
@Input() categoryName = '';
@Input() imagePath = '';
@Input() numRestaurants = 1;
}
