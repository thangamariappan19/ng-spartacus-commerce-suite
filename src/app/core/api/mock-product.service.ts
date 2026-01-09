import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class MockProductService {
  private products: Product[] = [
    {
      id: 'p1',
      name: 'Elegant Chair',
      price: 2999,
      image: 'https://picsum.photos/seed/chair/400/300',
      description: 'Comfortable and stylish chair for your living room.',
    },
    {
      id: 'p2',
      name: 'Modern Desk Lamp',
      price: 1299,
      image: 'https://picsum.photos/seed/lamp/400/300',
      description: 'Bright desk lamp with modern design.',
    },
    {
      id: 'p3',
      name: 'Wooden Coffee Table',
      price: 4999,
      image: 'https://picsum.photos/seed/table/400/300',
      description: 'Solid wood coffee table for your home.',
    },
  ];

  getAll() {
    return this.products;
  }
}
