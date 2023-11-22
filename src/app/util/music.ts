export class Music {
  static intervals = {
    0: 'Root',
    1: 'Minor 2nd',
    2: 'Major 2nd',
    3: 'Minor 3rd',
    4: 'Major 3rd',
    5: 'Perfect 4th',
    6: 'Tritone',
    7: 'Perfect 5th',
    8: 'Minor 6th',
    9: 'Major 6th',
    10: 'Minor 7th',
    11: 'Major 7th',
    12: 'Octave',
    13: 'Minor 9th',
    14: 'Major 9th',
    15: 'Minor 10th',
    16: 'Major 10th',
    17: 'Perfect 11th',
    18: 'Augmented 11th',
    19: 'Perfect 12th',
    20: 'Minor 13th',
    21: 'Major 13th',
    22: 'Minor 14th',
    23: 'Major 14th',
    24: 'Double octave'
  }

  static quality = {
    'Major': {
      name: 'Major',
      minor: false,
      regex: /([A-G][#b]?)/,
      selector: 'A-G #/b',
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordIntervals: [0, 4, 7] //Root, Major 3rd, Perfect 5th
    },
    'Minor': {
      name: 'Minor',
      minor: true,
      regex: /([A-G][#b]?(m))|([A-G][#b]?(min))/,
      selector: 'm/min',
      scaleIntervals: [0, 2, 3.1, 5, 7, 8.1, 10.1],
      chordIntervals: [0, 3.1, 7] //Root, Minor(flat) 3rd, Perfect 5th
    },
    'Melodic Minor': {
      name: 'Melodic Minor',
      minor: true,
      scaleIntervals: [0, 2, 3.1, 5, 7, 9, 11],
    },
    'Harmonic Minor': {
      name: 'Harmonic Minor',
      minor: true,
      scaleIntervals: [0, 2, 3.1, 5, 7, 8.1, 11],
    },
    'Major Pentatonic': {
      name: 'Major Pentatonic',
      minor: false,
      scaleIntervals: [0, 2, 4, 7, 9],
    },
    'Minor Pentatonic': {
      name: 'Minor Pentatonic',
      minor: true,
      scaleIntervals: [0, 3.1, 5, 7, 10.1],
    },
    'Minor Pentatonic Blues': {
      name: 'Minor Pentatonic Blues',
      minor: true,
      scaleIntervals: [0, 3.1, 5, 6.1, 7, 10],
    },
    'Major Pentatonic Blues': {
      name: 'Major Pentatonic Blues',
      minor: false,
      scaleIntervals: [0, 2, 3.1, 4, 7, 9],
    },
    'Fifth': {
      name: 'Fifth',
      minor: false,
      regex: /([A-G][#b]?5)/,
      selector: '5',
      chordIntervals: [0, 7] //Root, Perfect 5th
    },
    'Sixth': {
      name: 'Sixth',
      minor: false,
      regex: /([A-G][#b]?6)/,
      selector: '6',
      chordIntervals: [0, 4, 7, 9] //Root, Major 3rd, Perfect 5th, Major 6th
    },
    'Minor Sixth': {
      name: 'Minor Sixth',
      minor: true,
      regex: /([A-G][#b]?m6)|([A-G][#b]?min6)/,
      selector: 'm/min 6',
      chordIntervals: [0, 3.1, 7, 9] //Root, Minor 3rd, Perfect 5th, Major 6th
    },
    'Sixth Ninth': {
      name: 'Sixth Ninth',
      minor: false,
      regex: /([A-G][#b]?6\/9)|([A-G][#b]?6add9)/,
      selector: '6/9 or 6add9',
      chordIntervals: [0, 4, 7, 9, 2] //Root, Major 3rd, Perfect 5th, Major 6th, Major 9th
    },
    'Seventh': {
      name: 'Seventh',
      minor: false,
      regex: /([A-G][#b]?(7))/,
      selector: '7',
      chordIntervals: [0, 4, 7, 10.1] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th
    },
    'Major Seventh': {
      name: 'Major Seventh',
      minor: false,
      regex: /([A-G][#b]?maj7)/,
      selector: 'maj7',
      chordIntervals: [0, 4, 7, 11] //Root, Major 3rd, Perfect 5th, Major 7th
    },
    'Minor Seventh': {
      name: 'Minor Seventh',
      minor: true,
      regex: /([A-G][#b]?m7)|([A-G][#b]?min7)/,
      selector: 'm/min 7',
      chordIntervals: [0, 3.1, 7, 10.1] //Root, Minor(flat) 3rd, Perfect 5th, Minor(flat) 7th
    },
    'Minor Major Seventh': {
      name: 'Minor Major Seventh',
      minor: true,
      regex: /([A-G][#b]?mM7)|([A-G][#b]?minmaj)|([A-G][#b]?minM)|([A-G][#b]?m\(M7\))/,
      selector: 'm/min maj/M 7',
      chordIntervals: [0, 3.1, 7, 11] //Root, Minor(flat) 3rd, Perfect 5th, Major 7th
    },
    'Half-diminished': {
      name: 'Half-diminished',
      minor: true,
      regex: /([A-G][#b]?m7b5)|([A-G][#b]?ø)/,
      selector: 'm7b5 or ø',
      chordIntervals: [0, 3, 6, 10.1] //Root, Minor 3rd, Flat 5th, Minor 7th
    },
    'Ninth': {
      name: 'Ninth',
      minor: false,
      regex: /([A-G][#b]?9)/,
      selector: '9',
      chordIntervals: [0, 4, 7, 10.1, 2] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2 in notes array)
    },
    'Minor Ninth': {
      name: 'Minor Ninth',
      minor: true,
      regex: /([A-G][#b]?m9)|([A-G][#b]?min9)/,
      selector: 'm/min 9',
      chordIntervals: [0, 3.1, 7, 10.1, 2] //Root, Minor 3rd, Perfect 5th, Minor 7th, Major 9th
    },
    'Major Ninth': {
      name: 'Major Ninth',
      minor: false,
      regex: /([A-G][#b]?maj9)/,
      selector: 'maj9',
      chordIntervals: [0, 4, 7, 11, 2] //Root, Major 3rd, Perfect 5th, Major 7th, Major 9th
    },
    'Eleventh': {
      name: 'Eleventh',
      minor: false,
      regex: /([A-G][#b]?11)/,
      selector: '11',
      chordIntervals: [0, 4, 7, 10.1, 2, 5] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2), Major 11th (index 5)
    },
    'Minor Eleventh': {
      name: 'Minor Eleventh',
      minor: true,
      regex: /([A-G][#b]?m11)|([A-G][#b]?min11)/,
      selector: 'm/min 11',
      chordIntervals: [0, 3, 7, 10.1, 2, 5] //Root, Minor 3rd, Perfect 5th, Minor 7th, Major 9th, Major 11th
    },
    'Thirteenth': {
      name: 'Thirteenth',
      minor: false,
      regex: /([A-G][#b]?13)/,
      selector: '13',
      chordIntervals: [0, 4, 7, 10.1, 2, 5, 9] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2), Major 11th (index 4), Major 13th (index 6)
    },
    'Minor Thirteenth': {
      name: 'Minor Thirteenth',
      minor: true,
      regex: /([A-G][#b]?m13)|([A-G][#b]?min13)/,
      selector: 'm/min 13',
      chordIntervals: [0, 3.1, 7, 10.1, 2, 5, 9] //Root, Minor 3rd, Perfect 5th, Minor 7th, Major 9th, Major 11th, Major 13th
    },
    'Major Thirteenth': {
      name: 'Major Thirteenth',
      minor: false,
      regex: /([A-G][#b]?maj13)/,
      selector: 'maj13',
      chordIntervals: [0, 4, 7, 11.1, 2, 9] //Root, Major 3rd, Perfect 5th, Minor(flat) 7th, Major 9th (index 2), Major 13th
    },
    'Diminished': {
      name: 'Diminished',
      minor: true,
      regex: /([A-G][#b]?dim)|([A-G][#b]?°)/,
      selector: 'dim or °',
      chordIntervals: [0, 3.1, 6] //Root, Minor 3rd, Flat 5th
    },
    'Diminished 7': {
      name: 'Diminished 7',
      minor: true,
      regex: /([A-G][#b]?dim7)|([A-G][#b]?°7)/,
      selector: 'dim7 or °7',
      chordIntervals: [0, 3.1, 6, 9.1] //Root, Minor 3rd, Flat 5th, added Minor 3rd
    },
    'Augmented': {
      name: 'Augmented',
      minor: false,
      regex: /([A-G][#b]?aug)|([A-G][#b]?\+)/,
      selector: 'aug or +',
      chordIntervals: [0, 4, 8] //Root, Major 3rd, Augmented 5th
    },
    'Augmented 7': {
      name: 'Augmented 7',
      minor: false,
      regex: /(([A-G][#b]?aug7)|([A-G][#b]?7\+5)|([A-G][#b]?7#5)|([A-G][#b]?\+7))/,
      selector: 'aug7/7+5/7#5/+7',
      chordIntervals: [0, 4, 8, 10.1] //Root, Major 3rd, Augmented 5th, Minor 7th
    },
    'Add 9': {
      name: 'Add 9',
      minor: false,
      regex: /([A-G][#b]?add9)/,
      selector: 'add9',
      chordIntervals: [0, 4, 7, 2] //Root, Major 3rd, Perfect 5th, Major 9th
    },
    'Add 2': {
      name: 'Add 2',
      minor: false,
      regex: /([A-G][#b]?add2)/,
      selector: 'add2',
      chordIntervals: [0, 2, 4, 7] //Root, Major 2nd, Major 3rd, Perfect 5th
    },
    'Add 11': {
      name: 'Add 11',
      minor: false,
      regex: /([A-G][#b]?add11)/,
      selector: 'add11',
      chordIntervals: [0, 4, 7, 5] //Root, Major 3rd, Perfect 5th, Major 11th
    },
    'Add 4': {
      name: 'Add 4',
      minor: false,
      regex: /([A-G][#b]?add4)/,
      selector: 'add4',
      chordIntervals: [0, 4, 5, 7] //Root, Major 3rd, Perfect 4th, Perfect 5th
    },
    'Suspended 4': {
      name: 'Suspended 4',
      minor: false,
      regex: /([A-G][#b]?sus4)/,
      selector: 'sus4',
      chordIntervals: [0, 5, 7] //Root, Perfect 4th, Major 5th
    },
    'Suspended 2': {
      name: 'Suspended 2',
      minor: false,
      regex: /([A-G][#b]?sus2)/,
      selector: 'sus2',
      chordIntervals: [0, 2, 7] //Root, Major 2nd, Perfect 5th
    },
    'Seven Minus 5': {
      name: 'Seven Minus 5',
      minor: false,
      regex: /([A-G][#b]?(7-5))|([A-G][#b]?(7b5))/,
      selector: '7-5/7b5',
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
    'Gb': ['F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#'],
    'T': ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B',
      'C','C#','D','D#','E','F','F#','G','G#','A','A#','B',
      'C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
  }

  static tunings = {
    'Standard': {
      name: 'Standard',
      tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
      strings: [this.notes['E'], this.notes['B'], this.notes['G'], this.notes['D'], this.notes['A'], this.notes['E']]
    },
    'Drop D': {
      name: 'Drop D',
      tuning: ['E', 'B', 'G', 'D', 'A', 'D'],
      strings: [this.notes['E'], this.notes['B'], this.notes['G'], this.notes['D'], this.notes['A'], this.notes['D']]
    },
    'Drop C': {
      name: 'Drop C',
      tuning: ['D', 'A', 'F', 'C', 'G', 'C'],
      strings: [this.notes['D'], this.notes['A'], this.notes['F'], this.notes['C'], this.notes['G'], this.notes['C']]
    },
    '8 String Test': {
      name: '8 String Test',
      tuning: ['E', 'B', 'G', 'D', 'A', 'E', 'A', 'E'],
      strings: [this.notes['E'], this.notes['B'], this.notes['G'], this.notes['D'], this.notes['A'], this.notes['E'], this.notes['A'], this.notes['E']]
    },
    '4 String Test': {
      name: '4 String Test',
      tuning: ['D', 'A', 'F', 'C'],
      strings: [this.notes['G'], this.notes['D'], this.notes['A'], this.notes['E']]
    }
  }
}
