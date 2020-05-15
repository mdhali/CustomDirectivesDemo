import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicAttrDirective]'
})
export class BasicAttrDirectiveDirective {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
