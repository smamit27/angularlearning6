import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[AppBasicHighlightDirective]'
})
export class BasicHighlightDirective implements OnInit {
    constructor( private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.style.background = 'green';

        this.elementRef.nativeElement.style.color = 'blue';

    }
}