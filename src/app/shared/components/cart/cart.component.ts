import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Signal } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { CommonModule } from '@angular/common';
import { computed } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartItemsSignal !: Signal<CartItem[]>;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartItemsSignal = this.cartService.getCartProductsSignal();
  }

  totalPrice = computed(() => {
    let sum = 0;
    this.cartItemsSignal().forEach(item => {
      sum += item.product.price * item.quantity;
    })
    return sum;
  });

  totalNumber = computed(() => {
    let count = 0;
    this.cartItemsSignal().forEach(item => {
      count += item.quantity;
    })
    return count;
  })

  handleRemoveItem(productID: string) : void 
  {
    this.cartService.decrementQuantitySignal(productID);
  }
}
