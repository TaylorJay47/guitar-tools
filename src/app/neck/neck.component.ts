// @ts-nocheck
import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import { Music } from '../util/music';
import {NoteToggleService} from "../services/note-toggle.service";

@Component({
  selector: 'app-scale-chart',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.css']
})
export class NeckComponent implements OnInit, DoCheck {
  @Input() mode: string = 'scales'
  tune: string = 'Standard';
  key: string = 'C';
  quality: string = 'Major';
  oldTune = 'Standard'
  oldKey = 'C'
  oldQuality = 'Major'
  strings = Music.tunings[this.tune].strings;
  tuning = Music.tunings[this.tune].tuning;

  constructor(private noteToggleService: NoteToggleService) {}

  ngOnInit(): void {
    if (this.mode === 'scales'){
      this.updateKey()
    }
  }

  ngDoCheck() {
    if (this.tune !== this.oldTune) {
      if (this.tune) {
        console.log('Tuning changed to ' + this.tune)
        this.updateStrings()
        this.updateTuning()
        this.oldTune = this.tune;
      }
    }
    if (this.key !== this.oldKey) {
      if (this.key) {
        console.log('Key changed to ' + this.key)
        this.updateStrings()
        this.updateTuning()
        this.oldKey = this.key;
      }
    }
    if (this.quality !== this.oldQuality) {
      if (this.quality) {
        console.log('Quality changed to ' + this.quality)
        this.updateStrings()
        this.updateTuning()
        this.oldQuality = this.quality;
      }
    }
  }

  updateStrings() {
    this.strings = Music.tunings[this.tune].strings;
  }

  updateTuning() {
    this.tuning = Music.tunings[this.tune].tuning;
  }

  updateKey() {
    setTimeout(() => {
      this.noteToggleService.disableAll()
    }, 100)
    this.noteToggleService.enabled = []
    for (let int of Music.quality[this.quality].scaleIntervals) {
      this.noteToggleService.enabled.push(Music.notes[this.key][int])
      console.log(this.noteToggleService.enabled)
    }
    for (let note of this.noteToggleService.enabled){
      setTimeout(() => {
        this.noteToggleService.toggle(note)
      }, 350)
    }
  }

  toggleNote(note: string){
    this.noteToggleService.toggle(note);
  }
}
