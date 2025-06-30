import { Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/cart-item.model';
import { BehaviorSubject } from 'rxjs';
import { Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSignal = signal<CartItem[]>([]);

  addToCart(product: Product) : void
  {
    const itemsArr = this.cartItemsSignal();
    let updatedItemsArr;
    const existingItem = itemsArr.find(item => item.product.id === product.id);
    const existingIndex = itemsArr.findIndex(item => item.product.id === product.id);
    if(existingIndex !== -1)
    {
      const updatedItem = {
        ...itemsArr[existingIndex],
        quantity: itemsArr[existingIndex].quantity + 1
      }
      itemsArr[existingIndex] = updatedItem;
    }
    else
    {
      itemsArr.push({
        product: product,
        quantity: 1
      })
    }
    this.cartItemsSignal.set([...itemsArr]);
  }

  getCartProductsSignal() : Signal<CartItem[]>
  {
    return this.cartItemsSignal.asReadonly();
  }

  incrementQuantity(productID: string)
  {
    var itemsArr = this.cartItemsSignal();
    const item = itemsArr.find(item => item.product.id === productID);
    if(!item)
    {
      return ;
    }
    item.quantity ++;
    this.cartItemsSignal.set([...itemsArr]);
  }

  decrementQuantitySignal(productID: string)
  {
    var itemsArr = this.cartItemsSignal();
    const item = itemsArr.find(item => item.product.id === productID);
    if(!item)
    {
      return ;
    }
    if(item.quantity > 1)
    {
      item.quantity -- ;
    }
    else
    {
      itemsArr = itemsArr.filter(item => item.product.id !== productID);
    }
    this.cartItemsSignal.set([...itemsArr]);
  }


}
