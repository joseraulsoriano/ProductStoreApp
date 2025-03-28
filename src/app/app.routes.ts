// filepath: /Users/chasse/ANGULAR_WEB/ProductStoreApp/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];