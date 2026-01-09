import { Product } from '../core/api/mock-product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}
