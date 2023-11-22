import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Music } from '../util/music';

@Component({
  selector: 'app-neck-help',
  templateUrl: './neck-help.component.html',
  styleUrls: ['../styles/neck-help.component.scss']
})
export class NeckHelpComponent implements OnInit {
  @Input() mode: string = '';
  // @ts-ignore
  qualities = Object.entries(Music.quality).map(([key, val]) => {
    // @ts-ignore
    if (val.chordIntervals){
      return val.name;
    }
  }).filter(value => !!value);
  // @ts-ignore
  selectors = Object.entries(Music.quality).map(([key, val]) => {
    // @ts-ignore
    if (val.chordIntervals){
      // @ts-ignore
      return val.selector;
    }
  }).filter(value => !!value);

  constructor() { }

  ngOnInit(): void {
  }

}
