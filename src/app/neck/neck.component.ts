// @ts-nocheck
import {Component, OnInit, Input, DoCheck, ViewChild} from '@angular/core';
import { Music } from '../util/music';
import {NoteToggleService} from "../services/note-toggle.service";
import {NeckControlsComponent} from "../neck-controls/neck-controls.component";

@Component({
  selector: 'app-scale-chart',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.css']
})
export class NeckComponent implements OnInit, DoCheck {
  @Input() mode: string = 'scales'
  @ViewChild(NeckControlsComponent) child: NeckControlsComponent
  tune: string = 'Standard';
  key: string = 'C';
  quality: string = 'Major';
  oldTune = 'Standard'
  oldKey = 'C'
  oldQuality = 'Major'
  strings = Music.tunings[this.tune].strings;
  tuning = Music.tunings[this.tune].tuning;
  keyboardEnabled = false
  showHideKeyboard = 'Show'

  constructor(private noteToggleService: NoteToggleService) {}

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.tune !== this.oldTune) {
      if (this.tune) {
        this.updateStrings()
        this.updateTuning()
        this.oldTune = this.tune;
      }
    }
    if (this.key !== this.oldKey) {
      if (this.key) {
        this.updateStrings()
        this.updateTuning()
        this.oldKey = this.key;
      }
    }
    if (this.quality !== this.oldQuality) {
      if (this.quality) {
        this.updateStrings()
        this.updateTuning()
        this.oldQuality = this.quality;
      }
    }
  }

  toggleKeyboard() {
    this.keyboardEnabled = !this.keyboardEnabled
    if (this.keyboardEnabled) {
      this.child.onSubmit()
      this.showHideKeyboard = 'Hide'
    } else {
      this.showHideKeyboard = 'Show'
    }
  }

  updateStrings() {
    this.strings = Music.tunings[this.tune].strings;
  }

  updateTuning() {
    this.tuning = Music.tunings[this.tune].tuning;
  }

  toggleNote(note: string){
    this.noteToggleService.toggle(note);
  }
}
