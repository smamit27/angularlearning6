import { Directive , OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[AppBetterHighlightDirective]'
})
export class BetterHighlightDirective implements OnInit  {
    @HostBinding('style.color') color :string = 'green';
    constructor( private EleRef: ElementRef, private Render: Renderer2) {}
    ngOnInit () {
}
    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.Render.setStyle(this.EleRef.nativeElement, 'background-color', 'yellow');
      this.color  = 'blue';

    }
    @HostListener('mouseleave') mouserleave (evenData: Event) {
        //this.Render.setStyle(this.EleRef.nativeElement, 'background-color', 'transparent');
        this.color  = 'green';
    }

}