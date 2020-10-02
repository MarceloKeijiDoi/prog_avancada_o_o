import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({

  selector: '[appSombraNoLogo]'

})
export class SombraNoLogoDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'box-shadow', '10px 10px #805acb'
        )
     }

}
