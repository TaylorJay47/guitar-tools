// @ts-nocheck
import {Injectable} from '@angular/core';
import { Music } from '../util/music';

@Injectable({
  providedIn: 'root'
})
export class NoteToggleService {
  enabled: string[] = []
  flattened: string[] = []

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

  enableAll() {
    for (let note of Music.notes['E']) {
      if (note.length === 2) {
        $('.' + note.charAt(0) + '\\#').css('opacity', '');
      } else {
        $('.' + note).css('opacity', '');
      }
    }
  }

  toggle(note: string){
    if (note.length === 2) {
      if (note.charAt(1) === '#') {
        let noteEl = $('.' + note.charAt(0) + '\\#')
        if (noteEl.css('opacity') === '0.15') {
          noteEl.css('opacity', '');
        } else {
          noteEl.css('opacity', '15%');
        }
      } else {
        let noteEl = $('.' + note.charAt(0) + 'b')
        if (noteEl.css('opacity') === '0.15') {
          noteEl.css('opacity', '');
        } else {
          noteEl.css('opacity', '15%');
        }
      }
    } else {
      let noteEl = $('.' + note)
      if (noteEl.css('opacity') === '0.15'){
        noteEl.css('opacity', '');
      } else {
        noteEl.css('opacity', '15%');
      }
    }
  }

  flatten(note: string) {
    let noteEl = $('.' + note.charAt(0) + '\\#')
    let nextNote = Music.notes['E'][Music.notes['E'].indexOf(note) + 1]
    noteEl.text(noteEl.text().replaceAll(/([A-G][#b]?)/g, nextNote + 'b').substring(0,2))
    if (note.length > 1) {
      this.flattened.splice(this.flattened.indexOf(note), 1, nextNote.charAt(0) + 'b')
    }
  }

  sharpen(note: string) {
    let noteEl = $('.' + note.charAt(0) + 'b')
    let noteCheck = Music.notes['E'][Music.notes['E'].indexOf(note) - 2]
    if ($("li:contains(" + noteCheck + ")").css('opacity') > '0.15') {
      noteEl.text(noteEl.text().replaceAll(/([A-G][#b]?)/g, nextNote + '#').substring(0,2))
    }
  }

  resetQuality() {
    for (let note of Music.notes['E']) {
      if (note.length === 2) {
        let noteEl = $('.' + note.charAt(0) + '\\#')
        if (noteEl){
          noteEl.text(noteEl.text().replaceAll(/([A-G][#b]?)/g, note + '#').substring(0,2))
        }
      }
    }
  }
}
