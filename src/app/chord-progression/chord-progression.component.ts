import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chord-progression',
  templateUrl: './chord-progression.component.html',
  styleUrls: ['../styles/chord-progression.component.scss']
})
export class ChordProgressionComponent implements OnInit {
  @Output() getChord = new EventEmitter<any>();
  @Output() setChordEvent = new EventEmitter<string>();
  chords: string[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  setChord(chord: string) {
    this.setChordEvent.emit(chord);
  }

  addChord() {
    this.getChord.emit();
  }
}
