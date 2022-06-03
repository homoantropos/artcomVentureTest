import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <mat-spinner class="midHorizontal"></mat-spinner>
  `
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
