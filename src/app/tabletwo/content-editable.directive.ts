import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appContentEditableDirective]'
})
export class ContentEditableDirective {
  @HostListener('click') onClick(): void{
  }

  constructor(private el: ElementRef) {
  }

}
