import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products/products.component').then(
        m => m.ProductsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart/cart.component').then(
        m => m.CartComponent
      ),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout/checkout.component').then(
        m => m.CheckoutComponent
      ),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
