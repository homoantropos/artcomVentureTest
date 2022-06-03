import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../../../shared-layout/services/product.service";
import {Product} from "../../../shared-layout/model/interfaces";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit, OnChanges {

  products: Array<Product>;
  private _product: Product | null;
  get product(): Product {
    return this._product;
  }

  setProduct(product: Product | null) {
      this._product = product;
      this.productKeys = Object.keys(product);
  }

  productKeys: Array<string> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next: products => {
          this.products = products
        },
        error: error => console.log(error)
      }
      )
  }

}
