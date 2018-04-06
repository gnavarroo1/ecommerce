import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { BreadcrumbComponent } from './home/breadcrumb/breadcrumb.component';
import { ContentHeaderComponent } from './home/content/content-header/content-header.component';
import { ProductListComponent } from './home/content/product-list/product-list.component';
import { ProductListItemComponent } from './home/content/product-list/product-list-item/product-list-item.component';
import { FilterSummaryComponent } from './home/content/filter-summary/filter-summary.component';
import { ProductDetailPageComponent } from './product/components/product-detail-page/product-detail-page.component';
import { ProductDescriptionComponent } from './product/components/product-detail-page/product-description/product-description.component';
import { ProductDetailsComponent } from './product/components/product-detail-page/product-details/product-details.component';
import { ProductImagesComponent } from './product/components/product-detail-page/product-images/product-images.component';
import { ProductPriceInfoComponent } from './product/components/product-detail-page/product-price-info/product-price-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    SidebarComponent,
    BreadcrumbComponent,
    ContentHeaderComponent,
    ProductListComponent,
    ProductListItemComponent,
    FilterSummaryComponent,
    ProductDetailPageComponent,
    ProductDescriptionComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
