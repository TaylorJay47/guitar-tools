// @ts-nocheck
import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
    } else if (this.mode === 'chords'){
      if (this.tune !== this.oldTune) {
        if (this.tune) {
          this.tuneChange.emit(this.tune)
          this.oldTune = this.tune;
        }
      }

      setTimeout(() => {
        this.noteToggleService.disableAll()
      }, 100)
      this.noteToggleService.enabled = []
      for (let int of this.chordDecoderService.decodeChord(this.chord).intervals) {
        this.noteToggleService.enabled.push(Music.notes[this.chord.charAt(1) === '#' ? this.chord.substring(0,2) : this.chord.charAt(0)][int])
      }
      for (let note of this.noteToggleService.enabled){
        setTimeout(() => {
          this.noteToggleService.toggle(note)
        }, 350)
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
