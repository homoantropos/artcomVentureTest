import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/interfaces";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${environment.dbUlr}`);
  }
}
