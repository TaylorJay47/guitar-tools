import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNote]'
})
export class NoteDirective {
  @Input() note = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('limegreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.note.length === 2? $('.' + this.note.charAt(0) + '\\#').css('background-color',color) : $('.' + this.note).css('background-color',color);
  }
}
