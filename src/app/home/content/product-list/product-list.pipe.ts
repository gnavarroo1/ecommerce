import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { Product } from './../../../core/models/product';

/**
  * Filter the products based on selected taxons in the sidebar
  * @name filter
  * @param selectedTaxonids
  */
@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(products: Product[], selectedCategoryIds: number[]): any[] {
    const selectedIds = selectedCategoryIds;
    if (!products) { return []; }
    if (!selectedIds || selectedIds.length === 0) { return products; }
    return products.filter(product => {
      let productPresent = false;
      selectedIds.forEach(id => {
        if (product.category_id === id ) {
          productPresent = true;
        }
      });
      return productPresent;
    });
  }
}
