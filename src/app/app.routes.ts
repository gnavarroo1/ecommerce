import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';
export const routes: Routes = [
    {
      path: '',
      loadChildren: './home/home.module#HomeModule' },
    // {
    //   path: 'checkout',
    //   loadChildren: './checkout/checkout.module#CheckoutModule' },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule',
      canActivate: [ CanActivateViaAuthGuard ]
    },
    {
      path: 'product',
      loadChildren: './product-details/product.module#ProductModule'
    },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }

  ];