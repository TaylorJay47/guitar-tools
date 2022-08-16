import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNote]'
})
export class NoteDirective {
  @Input() note = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('limegreen');
    console.log('The note value here is ' + this.note);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener('click') onClick() {
    if (this.note.length === 2) {
      if ($('.' + this.note.charAt(0) + '\\#').css('opacity') === '0.15'){
        console.log('Enabling all ' + this.note + ' notes.')
        $('.' + this.note.charAt(0) + '\\#').css('opacity', '');
      } else {
        console.log('Disabling all ' + this.note + ' notes.')
        $('.' + this.note.charAt(0) + '\\#').css('opacity', '15%');
      }
    } else {
      if ($('.' + this.note).css('opacity') === '0.15'){
        console.log('Enabling all ' + this.note + ' notes.')
        $('.' + this.note).css('opacity', '');
      } else {
        console.log('Disabling all ' + this.note + ' notes.')
        $('.' + this.note).css('opacity', '15%');
      }
    }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.note.length === 2? $('.' + this.note.charAt(0) + '\\#').css('background-color',color) : $('.' + this.note).css('background-color',color);
  }
}
