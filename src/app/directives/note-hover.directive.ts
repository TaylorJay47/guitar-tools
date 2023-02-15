import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNote]'
})
export class NoteDirective {
  @Input() note = '';
  color = '';
  prevColor = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    // this.prevColor = this.note.length === 2 ? $('.keyboard .' + this.note.charAt(0) + '\\#').css('background-color') : $('.keyboard .' + this.note).css('background-color');
    this.color = this.note.length === 2? $('[type="note"].' + this.note.charAt(0) + '\\#').css('background-color') : $('[type="note"].' + this.note).css('background-color');
    this.highlight('limegreen', 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.color, 'remove');
  }

  private highlight(color: string, mode: string) {
    this.note.length === 2? $('[type="note"].' + this.note.charAt(0) + '\\#').css('background-color',color) : $('[type="note"].' + this.note).css('background-color',color);
    // if (mode === 'remove') {
    //   this.note.length === 2? $('.keyboard .' + this.note.charAt(0) + '\\#').css('background-color',this.prevColor) : $('.keyboard .' + this.note).css('background-color',this.prevColor);
    // }
  }
}
