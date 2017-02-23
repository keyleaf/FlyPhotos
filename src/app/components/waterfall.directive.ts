import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: 'waterfall-directive'
})
export class WaterfallDirective {
  constructor(elem: ElementRef, renderer: Renderer) {

  }
}
