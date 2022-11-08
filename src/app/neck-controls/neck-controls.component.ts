// @ts-nocheck
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Music} from "../util/music";
import {ChordDecoderService} from "../services/chord-decoder.service";
import {NoteToggleService} from "../services/note-toggle.service";

@Component({
  selector: 'app-neck-controls',
  templateUrl: './neck-controls.component.html',
  styleUrls: ['./neck-controls.component.css']
})
export class NeckControlsComponent implements OnInit {
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

  constructor(private chordDecoderService: ChordDecoderService,
              private noteToggleService: NoteToggleService) {};

  ngOnInit(): void {};

  keys = Music.notes['C'];
  tunings = Object.entries(Music.tunings).map(([key, val]) => {
    return val.name;
  });
  qualities = Object.entries(Music.quality).map(([key, val]) => {
    if (val.scaleIntervals){
      return val.name;
    }
  }).filter(scale => scale);

  controlsForm = new FormGroup({
    tuningControl: new FormControl('Standard'),
    keyControl: new FormControl('C'),
    qualityControl: new FormControl('Major'),
    chordControl: new FormControl('')
  });

  onSubmit() {
    this.noteToggleService.disableAll()
    setTimeout(() => {
      this.noteToggleService.resetQuality()
    }, 225)
    this.noteToggleService.enabled = []

    if (this.mode === 'scales'){
      if (this.tune !== this.oldTune) {
        if (this.tune) {
          this.tuneChange.emit(this.tune)
          this.oldTune = this.tune;
        }
      }
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
      }

      for (let note of this.noteToggleService.enabled) {
        setTimeout(() => {
          if (this.key.charAt(1) !== '#') {
            for (let int of Music.quality[this.quality].scaleIntervals) {
              if (!this.noteToggleService.enabled.includes(note.charAt(0))) {
                if (int.toString().length > 2 && note.length === 2) {
                  this.noteToggleService.flatten(note);
                } else if (Music.quality[this.quality].minor) {
                  this.noteToggleService.flatten(note);
                }
              }
            }
          }
        }, 250)
      }

      setTimeout(() => {
        for (let note of this.noteToggleService.enabled){
          this.noteToggleService.toggle(note)
        }
      }, 300)

    } else if (this.mode === 'chords'){
      if (this.tune !== this.oldTune) {
        if (this.tune) {
          this.tuneChange.emit(this.tune)
          this.oldTune = this.tune;
        }
      }
      for (let int of this.chordDecoderService.decodeChord(this.chord).intervals) {
        let note = Music.notes[this.chord.charAt(1) === '#' || this.chord.charAt(1) === 'b' ? this.chord.substring(0,2) : this.chord.charAt(0)][Math.floor(int)]
        this.noteToggleService.enabled.push(note)
      }
      for (let note of this.noteToggleService.enabled) {
        setTimeout(() => {
          if (this.chord.charAt(1) !== '#') {
            for (let int of this.chordDecoderService.decodeChord(this.chord).intervals) {
              if (!this.noteToggleService.enabled.includes(note.charAt(0))) {
                if (int.toString().length > 2 && note.length === 2) {
                  this.noteToggleService.flatten(note);
                } else if (Music.quality[this.quality].minor) {
                  this.noteToggleService.flatten(note);
                }
              }
            }
          }
        }, 250)
      }
      for (let note of this.noteToggleService.enabled){
        setTimeout(() => {
          this.noteToggleService.toggle(note)
        }, 300)
      }
    }
  }

  onReset() {
    if (this.mode === 'scales') {
      this.tune = this.oldTune
      this.tuneChange.emit(this.tune)
      this.key = this.oldKey
      this.keyChange.emit(this.key)
      this.quality = this.oldQuality
      this.qualityChange.emit(this.quality)
    } else if (this.mode === 'chords') {
      this.tune = this.oldTune
      this.tuneChange.emit(this.tune)
      this.chord = ''
    }
  }

  //TODO add form for scale selection
  //TODO import scale chart
  //TODO create interaction between form and scale chart
}
