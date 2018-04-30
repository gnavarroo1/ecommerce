import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

export const ProductRoutes: Routes = [
  { path: '', component: ProductDetailsComponent, pathMatch: 'full' },
  { path: ':id', component: ProductDetailsComponent }
];

