import {
  Directive,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appNgForOf]'
})

export class NgForCopyDirective implements OnChanges {

  @Input('appNgForOf') dataSource: any;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
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
