import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/index';
// Components
import { HomeComponent } from './home.component';
// Breadcrumb components
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
// Content components
import { ProductListComponent } from './content/product-list/product-list.component';
import { ProductListItemComponent } from './content/product-list/product-list-item/product-list-item.component';
import { ContentComponent } from './content/content';
import { FilterSummaryComponent } from './content/filter-summary/filter-summary.component';
import { CustomizeComponent } from './content/customize/customize.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';
// Sidebar components
import { CategoriesComponent } from './sidebar/categories/categories.component';
import { FilterComponent } from './sidebar/filters/filters.component';
// Routes
import { HomeRoutes as routes } from './home.routes';
// Pipe
import { FilterPipe } from './content/product-list/product-list.pipe';
//Services

@NgModule({
  declarations: [
    // components
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
    CategoriesComponent,
    FilterComponent,
    BreadcrumbComponent,
    ContentHeaderComponent,
    CustomizeComponent,
    FilterSummaryComponent,
    ContentComponent,
    FilterPipe
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
  ]
})
export class HomeModule {}
