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
  key: string = 'C';
  quality: string = 'Major';
  oldKey = 'C'
  oldQuality = 'Major'
  strings: string[] = Music.tunings['Standard'].strings;
  tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
  oldTuning = this.tuning;
  keyboardEnabled = false
  showHideKeyboard = 'Show'
  public isKeyboardCollapsed = true;
  public isHelpCollapsed = true;
  public isSettingsCollapsed = true;



  constructor(private noteToggleService: NoteToggleService) {}

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.tuning !== this.oldTuning) {
      if (this.tuning) {
        this.updateStrings()
        this.oldTuning = this.tuning;
        setTimeout(() => {
          $('.neck').css('height', $('.tuning').css('height'))
          $('.frets li').css('height', $('.tuning').css('height'))
        }, 10)
      }
    }
    if (this.key !== this.oldKey) {
      if (this.key) {
        this.oldKey = this.key;
      }
    }
    if (this.quality !== this.oldQuality) {
      if (this.quality) {
        this.oldQuality = this.quality;
      }
    }
  }

  toggleKeyboard() {
    this.keyboardEnabled = !this.keyboardEnabled
    if (this.keyboardEnabled) {
      this.showHideKeyboard = 'Hide'
    } else {
      this.showHideKeyboard = 'Show'
    }
  }

  updateStrings() {
    this.strings = [];
    for (let note of this.tuning) {
      this.strings.push(Music.notes[note]);
    }
  }

  toggleNote(note: string){
    this.noteToggleService.toggle(note);
  }

  defaultSettings() {

  }
}
