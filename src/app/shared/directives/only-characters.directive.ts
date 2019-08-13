import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyCharacters]'
})
export class OnlyCharactersDirective {

  constructor(public el: ElementRef) {
    this.el.nativeElement.onkeypress = (evt) => {
      if ( (evt.which < 65 || evt.which > 90) && (evt.which < 97 || evt.which > 122) ) {
          evt.preventDefault();
      }
    };
  }
}
