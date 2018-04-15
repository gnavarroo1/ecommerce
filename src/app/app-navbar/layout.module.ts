import { NgModule } from '@angular/core';

// Components
import {AppNavbarComponent} from './app-navbar.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';

// Modules
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/index';

@NgModule({
  declarations: [
    // components
    AppNavbarComponent,
    // sub components
    ProfileDropdownComponent

    // pipes
  ],
  exports: [
    AppNavbarComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule {}
