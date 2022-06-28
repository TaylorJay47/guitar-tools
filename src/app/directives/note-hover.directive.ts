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
    if ($('.' + this.note).css('opacity') === '0.15'){
      $('.' + this.note).css('opacity', '');
    } else {
      $('.' + this.note).css('opacity', '15%');
    }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    $('.' + this.note).css('background-color',color);
  }
}
