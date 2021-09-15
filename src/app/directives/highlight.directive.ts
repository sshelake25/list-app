import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lTHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
  //  console.log(el.nativeElement.outerText);
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'red';
  }

}
