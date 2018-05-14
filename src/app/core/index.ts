import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { SharedService } from './services/shared.service';
import { CanActivateViaAuthGuard } from './guards/auth.guard';
@NgModule({
    declarations: [
      // components
        
      // pipes
    ],
    exports: [
      // components

    ],
    imports: [

    ],
    providers: [
      AuthService,
      ProductService,
      UserService,
      SharedService,
      CanActivateViaAuthGuard
    ]
  })
  export class CoreModule {}