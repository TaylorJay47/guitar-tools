import {Component, Input, OnInit} from '@angular/core';
import { Music } from '../util/music';
import {NoteToggleService} from "../services/note-toggle.service";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() mode: string = 'scales';
  keys = Music.notes['T'];
  sharpCss = {'background-color': 'black',
    'height': '65px',
    'width': '20px',
    'position': 'absolute',
    'margin-left': '-10px',
    'z-index': '5'}


  constructor(private noteToggleService: NoteToggleService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    for (let note of Music.notes['C']) {
      if (note.includes('#')) {
        let noteEl = $('.keyboard .' + note.charAt(0) + '\\#')
        noteEl.css(this.sharpCss)
      }
    }
    let octave = 1;
    let note = 1;
    for (let noteM of Music.notes['T']) {
      if (noteM.includes('#')) {
        $('.keyboard .' + noteM.charAt(0) + '\\#').eq(octave-1).addClass(octave.toString())
      } else {
        $('.keyboard .' + noteM).eq(octave - 1).addClass(octave.toString())
      }
      if (note === 12 || note === 24) {
        octave++
      }
      note++
    }
  }

  toggleNote(note: string){
    this.noteToggleService.toggle(note);
  }

}
