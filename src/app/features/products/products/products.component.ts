import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockProductService, Product } from '../../../core/api/mock-product.service';
import { CartService } from '../../../core/api/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: MockProductService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  addToCart(product: Product) {
    this.cart.add(product);
    alert('Added to cart');
  }
}
