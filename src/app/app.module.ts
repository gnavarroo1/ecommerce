import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { BreadcrumbComponent } from './home/breadcrumb/breadcrumb.component';
import { ContentHeaderComponent } from './home/content/content-header/content-header.component';
import { ProductListComponent } from './home/content/product-list/product-list.component';
import { ProductListItemComponent } from './home/content/product-list/product-list-item/product-list-item.component';
import { FilterSummaryComponent } from './home/content/filter-summary/filter-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    SidebarComponent,
    BreadcrumbComponent,
    ContentHeaderComponent,
    ProductListComponent,
    ProductListItemComponent,
    FilterSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
