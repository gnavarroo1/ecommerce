import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
    {
      path: '',
      loadChildren: './home/home.module#HomeModule' },
    // {
    //   path: 'checkout',
    //   loadChildren: './checkout/checkout.module#CheckoutModule' },
    // {
    //   path: 'user',
    //   loadChildren: './user/index#UserModule',
    //   canActivate: [ CanActivateViaAuthGuard ]
    // },
    // {
    //   path: 'product',
    //   loadChildren: './product/index#ProductModule'
    // },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }

  ];