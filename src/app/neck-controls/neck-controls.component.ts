// @ts-nocheck
import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Music} from "../util/music";
import {ChordDecoderService} from "../services/chord-decoder.service";
import {NoteToggleService} from "../services/note-toggle.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-neck-controls',
  templateUrl: './neck-controls.component.html',
  styleUrls: ['../styles/neck-controls.component.scss']
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
  chord = 'C'
  oldTune = 'Standard'
  oldKey = 'C'
  oldQuality = 'Major'
  ready = false
  intervalsArray = []
  intervals = ''
  notes = ''
  currentChord = '';
  displayChord = '';

  constructor(public chordDecoderService: ChordDecoderService,
              public noteToggleService: NoteToggleService,
              private route: ActivatedRoute) {}

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

  ngOnInit() {
    let temp = this.route.snapshot.paramMap.get('param');
    switch (this.mode) {
      case 'scales':
        let tempScale = this.route.snapshot.paramMap.get('scale');
        if (tempScale) {
          tempScale = tempScale?.replace(/sharp|Sharp/, '#').replace(/flat|Flat/, 'b');
          let isSharp = tempScale?.includes('#');
          let isFlat = tempScale?.includes('b');
          if (isSharp || isFlat) {
            setTimeout(() => {
              this.controlsForm.controls.keyControl.setValue(tempScale?.substring(0,2));
              this.controlsForm.controls.qualityControl.setValue(tempScale?.substring(2));
            }, 5);
            console.log(this.controlsForm.controls.qualityControl.value);
            this.key = tempScale?.substring(0,2);
            this.quality = tempScale?.substring(2);
            console.log(this.quality);
          } else {
            setTimeout(() => {
              this.controlsForm.controls.keyControl.setValue(tempScale?.charAt(0));
              this.controlsForm.controls.qualityControl.setValue(tempScale?.substring(1).replace(/(?!^)[A-Z]/g, letter => ` ${letter}`));
            }, 5);
            console.log(this.controlsForm.controls.qualityControl.value);
            this.key = tempScale?.charAt(0);
            this.quality = tempScale?.substring(1).replace(/(?!^)[A-Z]/g, letter => ` ${letter}`);
          }
        }
      case 'chords':
        const tempChord = this.route.snapshot.paramMap.get('chord');
        if (tempChord) {
          this.chord = tempChord?.replace(/sharp|Sharp/, '#').replace(/flat|Flat/, 'b');
        }
    }
  }

  flatten(interval: number, note: string) {
    let index = this.noteToggleService.enabled.indexOf(note)
    let intCheck = (this.mode === 'scales') ?
      Music.quality[this.quality].scaleIntervals[index] : Music.quality[this.quality].chordIntervals[index]
    if (this.chord.charAt(1) !== '#') {
      if (this.noteToggleService.enabled.includes(note.charAt(0)) && note !== this.key) {
        this.noteToggleService.flatten(note);
      } else if (this.chord.charAt(1) === 'b') {
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

    } else if (this.mode === 'chords' && this.chord) {
      this.quality = this.chordDecoderService.decodeChord(this.chord).quality
      for (let int of this.chordDecoderService.decodeChord(this.chord).intervals) {
        let note = Music.notes[this.chord.charAt(1) === '#' || this.chord.charAt(1) === 'b' ?
          this.chord.substring(0, 2) : this.chord.charAt(0)][Math.floor(int)]
        this.noteToggleService.enabled.push(note)
        this.noteToggleService.flattened.push(note)
      }
      this.flattenAndToggle(this.mode)
      setTimeout(() => {
        if (this.chord.charAt(1) === '#' || this.chord.charAt(1) === 'b') {
          this.displayChord = this.chord.substring(0,2);
        } else {
          this.displayChord = this.chord.charAt(0);
        }
        this.currentChord = this.chord;
        this.ready = true;
      }, 250)
    }
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
