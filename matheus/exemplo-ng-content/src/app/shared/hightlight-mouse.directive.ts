import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[hightlightMouse]'
})
export class HightlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    //   );
    this.backgroundColor = 'yellow';
  }

   @HostListener('mouseleave') onMouseOut(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background',
    //   'white'
    //   );
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

}
