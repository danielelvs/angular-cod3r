import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]; //pega tudo apos a palavra 'em'

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>  
  ) { }

  ngOnInit() {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
      // cria o template (que é LI) e define um valor implicito que é o numero para ser usado no N
    }
  }

}
