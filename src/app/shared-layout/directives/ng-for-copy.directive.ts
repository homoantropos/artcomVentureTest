import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgForOf]'
})

export class NgForCopyDirective implements OnInit {

  @Input('appNgForOf') dataSource: any;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
  }

  ngOnInit() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      this.container.createEmbeddedView(
        this.template,
        new NgForDirectiveContext(this.dataSource[i])
      )
    }
  }

}

export class NgForDirectiveContext {

  constructor(public $implicit: any) {
  }

}
