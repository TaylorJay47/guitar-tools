import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteToggleService {

  constructor() { }

  toggle(note: string){
    if (note.length === 2) {
      if ($('.' + note.charAt(0) + '\\#').css('opacity') === '0.15'){
        console.log('Enabling all ' + note + ' notes.')
        $('.' + note.charAt(0) + '\\#').css('opacity', '');
      } else {
        console.log('Disabling all ' + note + ' notes.')
        $('.' + note.charAt(0) + '\\#').css('opacity', '15%');
      }
    } else {
      if ($('.' + note).css('opacity') === '0.15'){
        console.log('Enabling all ' + note + ' notes.')
        $('.' + note).css('opacity', '');
      } else {
        console.log('Disabling all ' + note + ' notes.')
        $('.' + note).css('opacity', '15%');
      }
    }
  }
}
