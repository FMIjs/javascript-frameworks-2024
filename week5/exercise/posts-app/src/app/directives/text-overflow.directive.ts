import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostBinding, HostListener, Input, ViewContainerRef, inject } from '@angular/core';
import { HOVER_BACKGROUND_COLOR } from '../constants/style';
import { TooltipContentComponent } from '../components/tooltip-content/tooltip-content.component';

@Directive({
  selector: '[appTextOverflow]',
  standalone: true
})
export class TextOverflowDirective {
  private initialBackgroundColor!: string;
  private componentRef : ComponentRef<TooltipContentComponent> | null = null;

  @Input() appTextOverflow!: string;
  @Input() set backgroundColor(value : string) {
    this._backgroundColor = value;
    this.initialBackgroundColor = value;
  };

  @HostBinding('style.backgroundColor') _backgroundColor = '';

  @HostListener('mouseover') mouseOver() {
    this._backgroundColor = HOVER_BACKGROUND_COLOR;

    this.componentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
    const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
    this.elementRef.nativeElement.appendChild(domElem);
    this.componentRef.instance.tooltipText = this.appTextOverflow;
  }

  @HostListener('mouseleave') mouseLeave() {
    this._backgroundColor = this.initialBackgroundColor;
    this.viewContainerRef.clear();
  }

  elementRef = inject(ElementRef);
  appRef = inject(ApplicationRef);
  viewContainerRef = inject(ViewContainerRef);

  constructor() {
    this.elementRef.nativeElement.style.overflow = 'hidden';
    this.elementRef.nativeElement.style.textOverflow = 'ellipsis';
    this.elementRef.nativeElement.style.whiteSpace = 'nowrap';
    this.elementRef.nativeElement.style.width = '300px';
  }

}
