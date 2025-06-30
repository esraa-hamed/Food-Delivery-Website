import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-item-card',
  imports: [],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.scss'
})
export class MenuItemCardComponent {
@Input() id !: string;
@Input() name !: string;
@Input() description !: string;
@Input() price !: number;
@Input() imagePath !: string;

constructor(private cartService : CartService) {}

handleAddToCart() : void 
{
  this.cartService.addToCart({
    id: this.id,
    name: this.name,
    description: this.description,
    price: this.price
  })
  console.log(this.cartService.getCartProductsSignal().length);
  
}
}
