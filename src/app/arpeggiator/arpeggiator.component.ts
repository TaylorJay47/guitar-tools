import {Component, Input, OnInit} from '@angular/core';
import {NoteToggleService} from "../services/note-toggle.service";
import {Music} from "../util/music";

@Component({
  selector: 'app-arpeggiator',
  templateUrl: './arpeggiator.component.html',
  styleUrls: ['../styles/arpeggiator.component.scss']
})
export class ArpeggiatorComponent implements OnInit {
  @Input() mode: string = 'Scales';
  notesPerString: number = 3;
  extraNotesOnString: number = 0;
  currentNotesOnString: number = 1;
  searching: boolean = false;
  startingNote: string;
  startingFret: number;
  startingString: number;
  currentNote: string;
  currentFret: number;
  currentString: number;
  homeFret: number;
  endingNote: string;
  endingFret: number;
  endingString: number;
  numberOfNotes: number = 0;
  errorMessage: string;

  constructor(private noteToggleService: NoteToggleService) {}

  ngOnInit(): void {
    this.noteToggleService.isArpeggiator = true;
  }

  noteSelected(note: string, fret: number, string: number) {
    if (this.numberOfNotes === 0) {
      this.setStartingNote(note, fret, string)
      this.numberOfNotes++;
    } else if (this.numberOfNotes === 1) {
      this.setEndingNote(note, fret, string)
      this.numberOfNotes = 0;
    }
  }

  resetFrets() {
    this.startingFret = undefined;
    this.endingFret = undefined;
  }

  setStartingNote(note: string, fret: number, string: number) {
    this.resetFrets();
    this.errorMessage = undefined;
    this.startingNote = note;
    this.startingFret = fret;
    this.startingString = string;
    this.currentNote = note;
    this.currentFret = fret;
    this.currentString = string;
  }

  setEndingNote(note: string, fret: number, string: number) {
    this.endingNote = note;
    this.endingFret = fret;
    this.endingString = string;
    // @ts-ignore
    if (this.startingString < this.endingString) {
      this.resetFrets();
      this.errorMessage = 'Please select an ending note on a higher string'
    } else if (this.startingFret === this.endingFret && this.startingString === this.endingString) {
      this.resetFrets();
      this.errorMessage = 'Ending note and starting note cannot be the same'
    } else {
      this.generateArpeggio();
    }
  }

  getNextNote(note: string, fret: number, string: number) {
    this.currentNote = this.noteToggleService.enabled[this.noteToggleService.enabled.indexOf(note) + 1 > this.noteToggleService.enabled.length - 1 ?
      0 : this.noteToggleService.enabled.indexOf(note) + 1];
    let fretQuery = `.neck [note="${this.currentNote}"][string="${this.currentString}"]`;
    if ($(fretQuery).length > 1 && parseInt($(fretQuery).attr('fret')) < this.currentFret) {
      this.currentFret = parseInt($(fretQuery)[1].getAttribute('fret'));
    } else {
      this.currentFret = parseInt($(fretQuery).attr('fret'));
    }
    if (this.extraNotesOnString !== 0) {
      this.notesPerString = 4;
    } else {
      this.notesPerString = 3;
    }
    if (this.currentString !== this.endingString) {
      if (this.currentNotesOnString < this.notesPerString &&
        this.extraNotesOnString > 0 && this.currentFret <= this.endingFret &&
        ((this.mode === 'scales' && this.currentFret - this.homeFret <= 5) ||
          (this.mode === 'chords' && this.currentFret - this.homeFret <= 3 &&
          this.currentFret - this.endingFret < 4))) {
        this.currentNotesOnString++;
      } else if (this.currentFret - this.homeFret <= 3 && this.currentFret - this.endingFret < 4) {
        this.currentNotesOnString++;
      } else {
        this.currentString--;
        if (this.notesPerString === 4) {
          this.extraNotesOnString--;
        }
        fretQuery = `.neck [note="${this.currentNote}"][string="${this.currentString}"]`;
        if ($(fretQuery).length > 1 && parseInt($(fretQuery)[1].getAttribute('fret')) < this.currentFret) {
          this.currentFret = parseInt($(fretQuery)[1].getAttribute('fret'));
        } else {
          this.currentFret = parseInt($(fretQuery).attr('fret'));
        }
        this.homeFret = this.currentFret;
        this.currentNotesOnString = 1;
      }
    } else {
      this.currentNotesOnString++;
    }
  }

  generateArpeggio() {
    let count = 0;
    this.searching = true;
    this.noteToggleService.disableAll();
    this.extraNotesOnString = (this.endingFret - this.startingFret - 4) > 0 ? (this.endingFret - this.startingFret) - 4 : 0;
    setTimeout(() => {
      this.currentNotesOnString = 1;
      this.noteToggleService.toggleFretAndString(this.startingNote, this.startingFret, this.startingString);
      this.homeFret = this.startingFret;
      while (this.searching) {
        this.getNextNote(this.currentNote, this.currentFret, this.currentString);
        this.noteToggleService.toggleFretAndString(this.currentNote, this.currentFret, this.currentString);
        if (this.currentString === this.endingString && this.currentFret === this.endingFret) {
          this.searching = false;
        }
      }
      this.noteToggleService.toggleFretAndString(this.endingNote, this.endingFret, this.endingString);
    }, 300);
  }
}
