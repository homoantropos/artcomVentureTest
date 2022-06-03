import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../../../shared-layout/services/product.service";
import {Product} from "../../../shared-layout/model/interfaces";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit, OnChanges {

  // @ts-ignore
  products: Array<Product>;
  // @ts-ignore
  private _product: Product;
  get product(): Product {
    return this._product;
  }

  setProduct(product?: Product) {
    if(typeof product !== 'undefined') {
      this._product = product;
      this.productKeys = Object.keys(product);
    } else {
      this._product = null;
    }

  }

  productKeys: Array<string> = [];

  paginatorStartPageNumber = 0;
  itemsPerPage = 20;

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
