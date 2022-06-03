import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {Product} from "../model/interfaces";

@Directive({
  selector: '[appProductsListStyling]'
})

export class ProductsListStylingDirective {

  @Input('appProductsListStyling') product: Product;
  @Output() currentProduct: EventEmitter<Product> = new EventEmitter<Product>();

  @HostBinding('style.border') border = '';

  constructor() { }

  @HostListener('mouseenter') onMouseenter(): void {
    this.border = 'solid blue 1px';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.border = '';
  }

  @HostListener('click') onClick(): void {
    this.currentProduct.emit(this.product);
    this.border = 'solid red 1px';
  }
}
