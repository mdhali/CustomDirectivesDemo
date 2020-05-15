import { Directive, Input, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterAttrDirective]'
})
export class BetterAttrDirectiveDirective {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterAttrDirective') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

   @HostListener('mouseleave') mouseexit(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }
}
