// @ts-nocheck
import {Injectable} from '@angular/core';
import { Music } from '../util/music';

@Injectable({
  providedIn: 'root'
})
export class NoteToggleService {
  enabled: string[] = []
  flattened: string[] = []
  octave = 1;
  prevNoteInt = 0;


  constructor() { }

  disableAll() {
    for (let note of Music.notes['E']) {
      if (note.length === 2) {
        $('.neck .' + note.charAt(0) + '\\#').css('opacity', '15%');
      } else {
        $('.neck .' + note).css('opacity', '15%');
      }
    }
  }

  enableAll() {
    for (let note of Music.notes['E']) {
      if (note.length === 2) {
        $('.neck .' + note.charAt(0) + '\\#').css('opacity', '');
      } else {
        $('.neck .' + note).css('opacity', '');
      }
    }
  }

  toggleNote(selector: string, note: string, highlight: boolean = true) {
    let noteEl = $(selector)
    if (noteEl.css('opacity') === '0.15') {
      noteEl.css('opacity', '');
    } else {
      noteEl.css('opacity', '15%');
    }
    if (note === this.enabled[0] && highlight) {
      noteEl.css('background-color', '#63d663');
    }
  }

  toggleScaleKey(selector: string, note: string, intervals: []) {
    let noteEl = $(selector)
    if (note === this.enabled[0]) {
      noteEl.css('background-color', '#63d663');
    } else if (intervals[(this.enabled.indexOf(note))].toString().includes('.1')) {
      noteEl.css('background-color', '#4ea1f2');
    } else {
      noteEl.css('background-color', '#4ea1f2');
    }
  }

  toggleChordKey(selector: string, octave: number, note: string) {
    let noteEl = $(selector + '.' + octave.toString())
    if (note === this.enabled[0]) {
      noteEl.css('background-color', '#63d663');
    } else {
      noteEl.css('background-color', '#4ea1f2');
    }
  }

  toggle(note: string){
    if (note.length === 2) {
      if (note.charAt(1) === '#') {
        this.toggleNote('[type="note"].' + note.charAt(0) + '\\#', note)
        this.toggleNote('.tuning .' + note.charAt(0) + '\\#', note, false)
      } else {
        let noteEl = $('[type="note"].' + note.charAt(0) + 'b')
        this.toggleNote('[type="note"].' + note.charAt(0) + 'b', note)
        this.toggleNote('.tuning .' + note.charAt(0) + 'b', note, false)

      }
    } else {
      this.toggleNote('[type="note"].' + note, note)
      this.toggleNote('.tuning .' + note, note, false)
    }
  }

  colorKey(note: string, intervals: [], mode: string) {
    if (mode ==='scales') {
      if (note.length === 2) {
        if (note.charAt(1) === '#') {
          let noteEl = $('.keyboard .' + note.charAt(0) + '\\#')
          this.toggleScaleKey('.keyboard .' + note.charAt(0) + '\\#', note, intervals)
        } else {
          this.toggleScaleKey('.keyboard .' + note.charAt(0) + 'b', note, intervals)
        }
      } else {
        this.toggleScaleKey('.keyboard .' + note, note, intervals)
      }
    } else if (mode === 'chords') {
      if (intervals[(this.enabled.indexOf(note))] !== 0 && Music.notes.C.indexOf(note) < this.prevNoteInt) {
        if (this.octave < 3){
          this.octave++;
        }
      }
      if (this.octave === 1) {
        if (note.length === 2) {
          if (note.charAt(1)  === '#') {
            this.toggleChordKey('.keyboard .' + note.charAt(0) + '\\#', this.octave, note)
          } else {
            this.toggleChordKey('.keyboard .' + note.charAt(0) + 'b', this.octave, note)
          }
        } else {
          this.toggleChordKey('.keyboard .' + note, this.octave, note)
        }
      } else if (this.octave === 2) {
        if (note.length === 2) {
          if (note.charAt(1)  === '#') {
            this.toggleChordKey('.keyboard .' + note.charAt(0) + '\\#', this.octave, note)
          } else {
            this.toggleChordKey('.keyboard .' + note.charAt(0) + 'b', this.octave, note)
          }
        } else {
          this.toggleChordKey('.keyboard .' + note, this.octave, note)
        }
      } else if (this.octave === 3) {
        if (note.length === 2) {
          if (note.charAt(1)  === '#') {
            this.toggleChordKey('.keyboard .' + note.charAt(0) + '\\#', this.octave, note)
          } else {
            this.toggleChordKey('.keyboard .' + note.charAt(0) + 'b', this.octave, note)
          }
        } else {
          this.toggleChordKey('.keyboard .' + note, this.octave, note)
        }
      }
      this.prevNoteInt = Music.notes.C.indexOf(note);
    }
  }

  resetColors() {
    for (let note of Music.notes['E']) {
      note.length === 2 ? $('.keyboard .' + note.charAt(0) + '\\#').css('background-color','black') : $('.keyboard .' + note).css('background-color','');
      note.length === 2 ? $('[type="note"].' + note.charAt(0) + '\\#').css('background-color','') : $('[type="note"].' + note).css('background-color','');

    }
  }

  flatten(note: string) {
    let noteEl = $('.neck .' + note.charAt(0) + '\\#')
    let nextNote = Music.notes['E'][Music.notes['E'].indexOf(note) + 1]
    noteEl.text(noteEl.text().replaceAll(/([A-G][#b]?)/g, nextNote + 'b').substring(0,2))
    this.flattened.splice(this.flattened.indexOf(note), 1, nextNote.charAt(0) + 'b')
  }

  sharpen(note: string) {
    let noteEl = $('.neck .' + note.charAt(0) + 'b')
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
