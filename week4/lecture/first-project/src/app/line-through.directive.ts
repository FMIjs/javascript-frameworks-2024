import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[appLineThrough]',
  standalone: true,
})
export class LineThroughDirective {
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() set appLineThrough(newValue: boolean) {
    if (newValue)
      this.elementRef.nativeElement.style.textDecoration = 'line-through';
    else this.elementRef.nativeElement.style.textDecoration = '';
  }
}
