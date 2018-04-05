import { Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(products: any[], selectedCategoriesIds: number[]): any[] {
    const selectedIds = selectedCategoriesIds;
    if (!products) { return []; }
    if (!selectedIds || selectedIds.length === 0) { return products; }
    return products.filter(product => {
      let productPresent = false;
      selectedIds.forEach(id => {
        if (product.category_ids.findIndex(category_id => category_id === id ) !== -1) {
          productPresent = true;
        }
      });
      return productPresent;
    });
  }
}
