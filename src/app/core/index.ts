import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
      // components
        
      // pipes
    ],
    exports: [
      // components

    ],
    imports: [
      // Were not working on modules sice update to rc-5
      // TO BE moved to respective modules.
    ],
    providers: [
      AuthService,
      ProductService,
      UserService
    ]
  })
  export class CoreModule {}