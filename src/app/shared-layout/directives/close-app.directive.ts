import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCloseApp]'
})
export class CloseAppDirective implements OnChanges{

  @Input('appCloseApp') show = false;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['show'];
    if(change.isFirstChange() || !change.currentValue) {
      this.container.clear()
    } else {
      this.container.createEmbeddedView(
        this.template
      )
    }
  }

}
