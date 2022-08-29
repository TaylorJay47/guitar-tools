// @ts-nocheck
import { Injectable } from '@angular/core';
import { Music } from '../util/music';

@Injectable({
  providedIn: 'root'
})
export class ChordDecoderService {
  constructor() { }

  decodeChord(chord: string): {quality: string, intervals: number[]} {
    let quality = '';
    let intervals: number[] = [];
    // @ts-ignore
    Object.entries(Music.quality).map(([key, val]) => {
      if (val.regex?.test(chord)){
        quality = val.name;
        intervals = val.chordIntervals;
      }
    })
    return {quality, intervals}
  }
}
