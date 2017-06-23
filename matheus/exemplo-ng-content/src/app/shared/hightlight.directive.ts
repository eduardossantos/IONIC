import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    //   );
    this.backgroundColor = this.hightlightColor;
  }

   @HostListener('mouseleave') onMouseOut(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background',
    //   'white'
    //   );
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'white';
  @Input('hightlight') hightlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }


}
