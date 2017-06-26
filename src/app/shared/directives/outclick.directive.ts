import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({selector: '[outClick]'})
class OutClickDirective {
    private nativeElement: HTMLElement;

    constructor(private el: ElementRef) {
        this.nativeElement = el.nativeElement;
    }

    @HostListener('window:mousemove', ['$event']) windowMouseMove(e: MouseEvent) {
        console.log('mousemove', e);
    }

}