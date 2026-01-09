import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { Product } from './mock-product.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];

  getItems() {
    return this.items;
  }

  add(product: Product) {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  remove(productId: string) {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  getTotal() {
    return this.items.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    );
  }

  clear() {
    this.items = [];
  }
}
