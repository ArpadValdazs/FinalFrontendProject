import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appContentEditableDirective]'
})
export class ContentEditableDirective {
  @Input() appContentEditableDirective: string;
  @HostListener('click') onClick(): void{
    this.width(200);
  }

  private width(size: number): void{
    this.el.nativeElement.style.width = size;
  }

  constructor(private el: ElementRef) {
    console.log(this.appContentEditableDirective);
  }

}
