import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.show')
  isOpen:boolean = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.isOpen = false;

  }

  @HostListener('click')
  toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;

    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue',)
    //this.backgroundColor = this.highlightColor;
  }


}
