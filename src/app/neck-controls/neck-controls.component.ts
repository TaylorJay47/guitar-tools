// @ts-nocheck
import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Music} from "../util/music";
import {ChordDecoderService} from "../services/chord-decoder.service";
import {NoteToggleService} from "../services/note-toggle.service";

@Component({
  selector: 'app-neck-controls',
  templateUrl: './neck-controls.component.html',
  styleUrls: ['./neck-controls.component.css']
})
export class NeckControlsComponent{
  @Input() mode: string = 'Scales'
  @Input() tune: string = 'Standard';
  @Output() tuneChange = new EventEmitter<string>()
  @Input() key: string = 'C';
  @Output() keyChange = new EventEmitter<string>()
  @Input() quality: string = 'Major';
  @Output() qualityChange = new EventEmitter<string>()
  @Output() submitEvent = new EventEmitter<any>()
  @Output() resetNotes = new EventEmitter<any>()
  chord = ''
  oldTune = 'Standard'
  oldKey = 'C'
  oldQuality = 'Major'
  ready = false
  intervalsArray = []
  intervals = ''
  notes = ''

  constructor(public chordDecoderService: ChordDecoderService,
              public noteToggleService: NoteToggleService) {}

  keys = Music.notes['C'];
  qualities = Object.entries(Music.quality).map(([key, val]) => {
    if (val.scaleIntervals){
      return val.name;
    }
  }).filter(scale => scale);

  controlsForm = new FormGroup({
    keyControl: new FormControl('C'),
    qualityControl: new FormControl('Major'),
    chordControl: new FormControl('')
  });

  flatten(interval: number, note: string) {
    let index = this.noteToggleService.enabled.indexOf(note)
    let intCheck = (this.mode === 'scales') ?
      Music.quality[this.quality].scaleIntervals[index] : Music.quality[this.quality].chordIntervals[index]
    if (this.chord.charAt(1) !== '#') {
      if (this.noteToggleService.enabled.includes(note.charAt(0)) && note !== this.key) {
        this.noteToggleService.flatten(note);
      } else if (this.chord.charAt(1) === 'b' && interval === 0) {
        this.noteToggleService.flatten(note);
      }
      if (!this.noteToggleService.enabled.includes(note.charAt(0))) {
        if (intCheck < 2 && note.length === 2 && Music.quality[this.quality].minor) {
          this.noteToggleService.flatten(note);
        } else if (Music.quality[this.quality].minor) {
          this.noteToggleService.flatten(note);
        }
      }
    }
  }

  toggleNotes() {
    for (let note of this.noteToggleService.enabled){
      setTimeout(() => {
        this.noteToggleService.toggle(note)
        this.noteToggleService.colorKey(note, this.mode === 'scales' ?
          Music.quality[this.quality].scaleIntervals : Music.quality[this.quality].chordIntervals, this.mode)
      }, 300)
    }
    this.noteToggleService.octave = 1;
  }

  flattenAndToggle(page: string) {
    for (let note of this.noteToggleService.enabled) {
      let index = this.noteToggleService.enabled.indexOf(note)
      let intCheck = (this.mode === 'scales') ?
        Music.quality[this.quality].scaleIntervals[index] : Music.quality[this.quality].chordIntervals[index]
      setTimeout(() => {
        if (note.charAt(1) === '#' && this.key.charAt(1) !== '#') {
          this.flatten(intCheck, note);
        }
      }, 250)
    }
    let maxValue = 0;
    for (let int of this.mode === 'scales' ? Music.quality[this.quality].scaleIntervals : Music.quality[this.quality].chordIntervals) {
      let useThis = int;
      if (int > maxValue) {
        maxValue = int;
      }
      if (int < maxValue) {
        useThis = int + 12
      }
      this.intervalsArray.push(Music.intervals[Math.floor(useThis)])
    }
    this.intervals = this.intervalsArray.toString().replace(/,/g, ', ').replace(/\,(?=[^,]*$)/, ' and ')
    setTimeout(() => {
      this.notes = this.noteToggleService.flattened.toString().replace(/,/g, ', ').replace(/\,(?=[^,]*$)/, ' and ')
    }, 275)
    this.toggleNotes()
  }

  resetVariables() {
    this.notes = ''
    this.intervalsArray = []
    this.intervals = ''
    this.noteToggleService.flattened = []
    this.noteToggleService.enabled = []
  }

  onSubmit() {
    this.resetVariables()
    this.noteToggleService.resetColors()
    setTimeout(() => {
      this.noteToggleService.disableAll()
    }, 50)
    setTimeout(() => {
      this.noteToggleService.resetQuality()
    }, 175)
    this.noteToggleService.enabled = []

    if (this.mode === 'scales') {
      if (this.key !== this.oldKey) {
        if (this.key) {
          this.keyChange.emit(this.key)
          this.oldKey = this.key;
        }
      }
      if (this.quality !== this.oldQuality) {
        if (this.quality) {
          this.qualityChange.emit(this.quality)
          this.oldQuality = this.quality;
        }
      }
      this.submitEvent.emit()
      for (let int of Music.quality[this.quality].scaleIntervals) {
        let note = Music.notes[this.key][Math.floor(int)]
        this.noteToggleService.enabled.push(note)
        this.noteToggleService.flattened.push(note)
      }

      this.flattenAndToggle(this.mode)

    } else if (this.mode === 'chords') {
      this.quality = this.chordDecoderService.decodeChord(this.chord).quality
      for (let int of this.chordDecoderService.decodeChord(this.chord).intervals) {
        let note = Music.notes[this.chord.charAt(1) === '#' || this.chord.charAt(1) === 'b' ?
          this.chord.substring(0, 2) : this.chord.charAt(0)][Math.floor(int)]
        this.noteToggleService.enabled.push(note)
        this.noteToggleService.flattened.push(note)
      }

      this.flattenAndToggle(this.mode)
    }
    setTimeout(() => {
      this.ready = true;
    }, 250)
  }

  onReset() {
    if (this.mode === 'scales') {
      this.key = this.oldKey
      this.keyChange.emit(this.key)
      this.quality = this.oldQuality
      this.qualityChange.emit(this.quality)
    } else if (this.mode === 'chords') {
      this.chord = ''
    }

    this.noteToggleService.resetColors()
    this.noteToggleService.enableAll()
    this.noteToggleService.resetQuality()
    this.resetNotes.emit()
    this.ready = false;
  }

  //TODO add form for scale selection
  //TODO import scale chart
  //TODO create interaction between form and scale chart

  notReady() {
    this.ready = false;
  }
}
