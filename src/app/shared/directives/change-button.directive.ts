import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ChangeButton]'
})
export class ChangeButtonDirective {

  @HostBinding('style.color') 
    colorButton?: string;
  @HostBinding('style.font-size')
    fontSizeButton?: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.colorButton = 'white';
    this.fontSizeButton = '17px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.colorButton = undefined;
    this.fontSizeButton = undefined;
  }

  //constructor() { }

}
