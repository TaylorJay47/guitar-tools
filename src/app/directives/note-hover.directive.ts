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

  @HostListener('click') onClick() {
    if ($('[ng-reflect-note="' + this.note + '"]').css('opacity') === '0.15'){
      $('[ng-reflect-note="' + this.note + '"]').css('opacity', '');
    } else {
      $('[ng-reflect-note="' + this.note + '"]').css('opacity', '15%');
    }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    console.log('The note value here is ' + this.note);
    $('[ng-reflect-note="' + this.note + '"]').css('background-color',color);
  }
}
