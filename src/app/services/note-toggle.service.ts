// @ts-nocheck
import {DoCheck, Injectable, OnChanges} from '@angular/core';
import { Music } from '../util/music';

@Injectable({
  providedIn: 'root'
})
export class NoteToggleService {
  enabled: string[] = []

  constructor() { }

  disableAll() {
    for (let note of Music.notes['E']) {
      if (note.length === 2) {
        $('.' + note.charAt(0) + '\\#').css('opacity', '15%');
      } else {
        $('.' + note).css('opacity', '15%');
      }
    }
  }

  toggle(note: string){
    if (note.length === 2) {
      if ($('.' + note.charAt(0) + '\\#').css('opacity') === '0.15'){
        $('.' + note.charAt(0) + '\\#').css('opacity', '');
      } else {
        $('.' + note.charAt(0) + '\\#').css('opacity', '15%');
      }
    } else {
      if ($('.' + note).css('opacity') === '0.15'){
        $('.' + note).css('opacity', '');
      } else {
        $('.' + note).css('opacity', '15%');
      }
    }
  }
}
