import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
selector: 'table'
})
export class SombraNaTabelaDirective {
constructor(
private elementRef: ElementRef,
private renderer: Renderer2
) {
 }
 @HostListener('mouseover')quandoOMousePassarPorCima(){
   this.renderer.setStyle(
     this.elementRef.nativeElement,
     'box-shadow', '10px 10px #805acb'
   )
 };

 @HostListener('mouseleave')quandoMouseSair(){
   this.renderer.removeStyle(
     this.elementRef.nativeElement, 'box-shadow'
   )
 };

}
