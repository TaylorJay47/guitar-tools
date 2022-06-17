export class Music {
  //TODO create scales
  //TODO create intervals
  //TODO create chords
  static quality = {
    'Major': {
      name: 'Major',
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordIntervals: [0, 4, 7]
    },
    'Minor': {
      name: 'Minor',
      scaleIntervals: [0, 2, 3, 5, 7, 8, 10],
      chordIntervals: [0, 3, 7]
    }
  }

  static notes = {
    'E': ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
    'A': ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',"A"],
    'A#': ['A#','B','C','C#','D','D#','E','F','F#','G','G#',"A",'A#'],
    'D': ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],
    'D#': ['D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#'],
    'G': ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],
    'G#': ['G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
    'B': ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
    'C': ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C'],
    'C#': ['C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#'],
    'F': ['F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F'],
    'F#': ['F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#']
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
