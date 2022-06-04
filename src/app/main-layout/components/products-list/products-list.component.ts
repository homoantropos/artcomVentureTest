import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared-layout/services/product.service";
import {Product} from "../../../shared-layout/model/interfaces";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})

export class ProductsListComponent implements OnInit {

  // product to display in first block
  products: Array<Product>;

  // product to display in second block
  productKeys: Array<string> = [];
  private _product: Product | null;
  get product(): Product {return this._product;}
  setProduct(product?: Product) {
    if(typeof product !== 'undefined') {
      this._product = product;
      this.productKeys = Object.keys(product);
    } else {
      this._product = null;
    }
  }

  searchValue = '';
  searchField = ['ProductDescription'];

  paginatorStartPageNumber = 0;
  itemsPerPage = 10;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next: products => this.products = products,
        error: error => console.log(error)
      })
  }

}
