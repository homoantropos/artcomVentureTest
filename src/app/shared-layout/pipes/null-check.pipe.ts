import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../model/interfaces";

@Pipe({
  name: 'nullCheck'
})
export class NullCheckPipe implements PipeTransform {

  transform(value: string, key: string, product: Product): string {
    if(value === null) {
      return "it's unknown"
    } else if(key === 'VoDatum') {
      value = new Date(product[key]).toLocaleDateString('de-DE');
    } else if(key === 'Price') {
      value = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.Price);
    }
    return value;
  }

}
