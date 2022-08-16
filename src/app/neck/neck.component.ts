import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import { Music } from '../util/music';
import {NoteToggleService} from "../services/note-toggle.service";

@Component({
  selector: 'app-scale-chart',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.css']
})
export class NeckComponent implements OnInit, DoCheck {
  @Input() tune: string = 'Standard';
  @Input() key: string = 'C';
  @Input() quality: string = 'Major';
  oldTune = 'Standard'
  oldKey = 'C'
  oldQuality = 'Major'
  // @ts-ignore
  strings = Music.tunings[this.tune].strings;
  // @ts-ignore
  tuning = Music.tunings[this.tune].tuning;

  constructor(private noteToggleService: NoteToggleService) {}

  ngOnInit(): void {
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
    // @ts-ignore
    this.strings = Music.tunings[this.tune].strings;
  }

  updateTuning() {
    // @ts-ignore
    this.tuning = Music.tunings[this.tune].tuning;
  }

  toggleNote(note: string){
    this.noteToggleService.toggle(note);
  }
}
