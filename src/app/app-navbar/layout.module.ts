import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule {}
