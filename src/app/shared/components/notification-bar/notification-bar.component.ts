import { Component, Input, Signal, OnInit, computed } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-bar',
  imports: [CommonModule],
  templateUrl: './notification-bar.component.html',
  styleUrl: './notification-bar.component.scss'
})
export class NotificationBarComponent implements OnInit{

  cartItemsSignal !: Signal<CartItem[]>;
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

  constructor(private cartService : CartService, private router : Router){}

  ngOnInit(): void {
    this.cartItemsSignal = this.cartService.getCartProductsSignal();
  }

  handleGoToCart() : void 
  {
    this.router.navigate(['cart']);
  }
}
