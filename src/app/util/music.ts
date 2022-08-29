export class Music {
  static quality = {
    'Major': {
      name: 'Major',
      regex: /([A-G][#b]?)/,
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordIntervals: [0, 4, 7] //Root, Major 3rd, Perfect 5th
    },
    'Minor': {
      name: 'Minor',
      regex: /([A-G][#b]?(m))|([A-G][#b]?(min))/,
      scaleIntervals: [0, 2, 3.1, 5, 7, 8.1, 10.1],
      chordIntervals: [0, 3.1, 7] //Root, Minor(flat) 3rd, Perfect 5th
    },
    'Melodic Minor': {
      name: 'Melodic Minor',
      scaleIntervals: [0, 2, 3.1, 5, 7, 9, 11],
    },
    'Harmonic Minor': {
      name: 'Harmonic Minor',
      scaleIntervals: [0, 2, 3.1, 5, 7, 8.1, 11],
    },
    'Major Pentatonic': {
      name: 'Major Pentatonic',
      scaleIntervals: [0, 2, 4, 7, 9],
    },
    'Minor Pentatonic': {
      name: 'Minor Pentatonic',
      scaleIntervals: [0, 3.1, 5, 7, 10.1],
    },
    'Minor Pentatonic Blues': {
      name: 'Minor Pentatonic Blues',
      scaleIntervals: [0, 3.1, 5, 6.1, 7, 9.1],
    },
    'Major Pentatonic Blues': {
      name: 'Major Pentatonic Blues',
      scaleIntervals: [0, 2, 3.1, 4, 7, 9],
    },
    'Fifth': {
      name: 'Fifth',
      regex: /([A-G][#b]?5)/,
      chordIntervals: [0, 7] //Root, Perfect 5th
    },
    'Sixth': {
      name: 'Sixth',
      regex: /([A-G][#b]?6)/,
      chordIntervals: [0, 4, 7, 9] //Root, Major 3rd, Perfect 5th, Major 6th
    },
    'Minor Sixth': {
      name: 'Minor Sixth',
      regex: /([A-G][#b]?m6)|([A-G][#b]?min6)/,
      chordIntervals: [0, 3.1, 7, 9] //Root, Minor 3rd, Perfect 5th, Major 6th
    },
    'Sixth Ninth': {
      name: 'Sixth Ninth',
      regex: /([A-G][#b]?6\/9)|([A-G][#b]?6add9)/,
      chordIntervals: [0, 4, 7, 9, 2] //Root, Major 3rd, Perfect 5th, Major 6th, Major 9th
    },
    'Seventh': {
      name: 'Seventh',
      regex: /([A-G][#b]?(7))/,
      chordIntervals: [0, 4, 7, 10.1] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th
    },
    'Major Seventh': {
      name: 'Major Seventh',
      regex: /([A-G][#b]?maj7)/,
      chordIntervals: [0, 4, 7, 11] //Root, Major 3rd, Perfect 5th, Major 7th
    },
    'Minor Seventh': {
      name: 'Minor Seventh',
      regex: /([A-G][#b]?m7)|([A-G][#b]?min7)/,
      chordIntervals: [0, 3.1, 7, 10.1] //Root, Minor(flat) 3rd, Perfect 5th, Minor(flat) 7th
    },
    'Minor Major Seventh': {
      name: 'Minor Major Seventh',
      regex: /([A-G][#b]?mM7)|([A-G][#b]?minmaj)|([A-G][#b]?m\(M7\))/,
      chordIntervals: [0, 3.1, 7, 11] //Root, Minor(flat) 3rd, Perfect 5th, Major 7th
    },
    'Half-diminished': {
      name: 'Half-diminished',
      regex: /([A-G][#b]?m7b5)|([A-G][#b]?ø)/,
      chordIntervals: [0, 3, 6, 10.1] //Root, Minor 3rd, Flat 5th, Minor 7th
    },
    'Ninth': {
      name: 'Ninth',
      regex: /([A-G][#b]?9)/,
      chordIntervals: [0, 4, 7, 10.1, 2] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2 in notes array)
    },
    'Minor Ninth': {
      name: 'Minor Ninth',
      regex: /([A-G][#b]?m9)|([A-G][#b]?min9)/,
      chordIntervals: [0, 3.1, 7, 10.1, 2] //Root, Minor 3rd, Perfect 5th, Minor 7th, Major 9th
    },
    'Major Ninth': {
      name: 'Manor Ninth',
      regex: /([A-G][#b]?maj9)/,
      chordIntervals: [0, 4, 7, 11, 2] //Root, Major 3rd, Perfect 5th, Major 7th, Major 9th
    },
    'Eleventh': {
      name: 'Eleventh',
      regex: /([A-G][#b]?11)/,
      chordIntervals: [0, 4, 7, 10.1, 2, 5] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2), Major 11th (index 5)
    },
    'Minor Eleventh': {
      name: 'Minor Eleventh',
      regex: /([A-G][#b]?m11)|([A-G][#b]?min11)/,
      chordIntervals: [0, 3, 7, 10.1, 2, 5] //Root, Minor 3rd, Perfect 5th, Minor 7th, Major 9th, Major 11th
    },
    'Thirteenth': {
      name: 'Thirteenth',
      regex: /([A-G][#b]?13)/,
      chordIntervals: [0, 4, 7, 10.1, 2, 5, 9] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2), Major 11th (index 4), Major 13th (index 6)
    },
    'Minor Thirteenth': {
      name: 'Minor Thirteenth',
      regex: /([A-G][#b]?m13)|([A-G][#b]?min13)/,
      chordIntervals: [0, 3.1, 7, 10.1, 2, 5, 9] //Root, Minor 3rd, Perfect 5th, Minor 7th, Major 9th, Major 11th, Major 13th
    },
    'Major Thirteenth': {
      name: 'Major Thirteenth',
      regex: /([A-G][#b]?maj13)/,
      chordIntervals: [0, 4, 7, 11.1, 2, 9] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2), Major 13th
    },
    'Diminished': {
      name: 'Diminished',
      regex: /([A-G][#b]?dim)|([A-G][#b]?°)/,
      chordIntervals: [0, 3.1, 6] //Root, Minor 3rd, Flat 5th
    },
    'Diminished 7': {
      name: 'Diminished 7',
      regex: /([A-G][#b]?dim7)|([A-G][#b]?°7)/,
      chordIntervals: [0, 3.1, 6, 9.1] //Root, Minor 3rd, Flat 5th, added Minor 3rd
    },
    'Augmented': {
      name: 'Augmented',
      regex: /([A-G][#b]?aug)|([A-G][#b]?\+)/,
      chordIntervals: [0, 4, 8] //Root, Major 3rd, Augmented 5th
    },
    'Augmented 7': {
      name: 'Augmented 7',
      regex: /(([A-G][#b]?aug7)|([A-G][#b]?7\+5)|([A-G][#b]?7#5)|([A-G][#b]?\+7))/,
      chordIntervals: [0, 4, 8, 10.1] //Root, Major 3rd, Augmented 5th, Minor 7th
    },
    'Add 9': {
      name: 'Add 9',
      regex: /([A-G][#b]?add9)/,
      chordIntervals: [0, 4, 7, 2] //Root, Major 3rd, Perfect 5th, Major 9th
    },
    'Add 2': {
      name: 'Add 2',
      regex: /([A-G][#b]?add2)/,
      chordIntervals: [0, 2, 4, 7] //Root, Major 2nd, Major 3rd, Perfect 5th
    },
    'Add 11': {
      name: 'Add 11',
      regex: /([A-G][#b]?add11)/,
      chordIntervals: [0, 4, 7, 5] //Root, Major 3rd, Perfect 5th, Major 11th
    },
    'Add 4': {
      name: 'Add 4',
      regex: /([A-G][#b]?add4)/,
      chordIntervals: [0, 4, 5, 8] //Root, Major 3rd, Perfect 4th, Perfect 5th
    },
    'Suspended 4': {
      name: 'Suspended 4',
      regex: /([A-G][#b]?sus4)/,
      chordIntervals: [0, 5, 7] //Root, Perfect 4th, Major 5th
    },
    'Suspended 2': {
      name: 'Suspended 2',
      regex: /([A-G][#b]?sus2)/,
      chordIntervals: [0, 2, 7] //Root, Major 2nd, Perfect 5th
    },
    'Seven Minus 5': {
      name: 'Seven Minus 5',
      regex: /([A-G][#b]?(7-5))|([A-G][#b]?(7b5))/,
      chordIntervals: [0, 4, 6.1, 10.1] //Root, Major 3rd, Flat 5th, Minor(flat) 7th
    }
  }

  static notes = {
    'E': ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
    'A': ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A'],
    'A#': ['A#','B','C','C#','D','D#','E','F','F#','G','G#',"A",'A#'],
    'Bb': ['A#','B','C','C#','D','D#','E','F','F#','G','G#',"A",'A#'],
    'D': ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],
    'D#': ['D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#'],
    'Eb': ['D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#'],
    'G': ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],
    'G#': ['G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
    'Ab': ['G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
    'B': ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
    'C': ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C'],
    'C#': ['C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#'],
    'Db': ['C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#'],
    'F': ['F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F'],
    'F#': ['F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#'],
    'Gb': ['F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#']
  }

  static tunings = {
    'Standard': {
      name: 'Standard',
      tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
      strings: [this.notes['E'], this.notes['B'] ,this.notes['G'], this.notes['D'], this.notes['A'], this.notes['E']]
    },
    'Drop D': {
      name: 'Drop D',
      tuning: ['E', 'B', 'G', 'D', 'A', 'D'],
      strings: [this.notes['E'], this.notes['B'] ,this.notes['G'], this.notes['D'], this.notes['A'], this.notes['D']]
    },
    'Drop C': {
      name: 'Drop C',
      tuning: ['D', 'A', 'F', 'C', 'G', 'C'],
      strings: [this.notes['D'], this.notes['A'] ,this.notes['F'], this.notes['C'], this.notes['G'], this.notes['C']]
    }
  }
}
