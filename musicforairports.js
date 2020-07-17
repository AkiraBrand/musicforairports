const SAMPLE_LIBRARY =  {
  'Grand Piano': [
      { note: 'A', octave: 4, file: 'Samples/Grand Piano/piano-f-a4.wav' },
      { note: 'A', octave: 5, file: 'Samples/Grand Piano/piano-f-a5.wav' },
      { note: 'A', octave: 6, file: 'Samples/Grand Piano/piano-f-a6.wav' },
      { note: 'C', octave: 4, file: 'Samples/Grand Piano/piano-f-c4.wav' },
      { note: 'C', octave: 5, file: 'Samples/Grand Piano/piano-f-c5.wav' },
      { note: 'C', octave: 6, file: 'Samples/Grand Piano/piano-f-c6.wav '},
      { note: 'D#', octave: 4, file: 'Samples/Grand Piano/piano-f-d#4.wav' },
      { note: 'D#', octave: 5, file: 'Samples/Grand Piano/piano-f-d#5.wav' },
      { note: 'D#', octave: 6, file: 'Samples/Grand Piano/piano-f-d#6.wav' },
      { note: 'F#', octave: 4, file: 'Samples/Grand Piano/piano-f-f#4.wav' },
      { note: 'F#', octave: 5, file: 'Samples/Grand Piano/piano-f-f#5.wav' },
      { note: 'F#', octave: 6, file: 'Samples/Grand Piano/piano-f-f#6.wav' },
  ]
};

const SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function getSample (instrument, noteAndOctave) {
    let[, requestedNote, requestedOctave] = /^(\w[b#]?)(\d)$/.exec(noteAndOctave);
    requestedOctave = parseInt(requestedOctave, 10);
    requestedNote = flatToSharp(requestedNote);
}

function flatToSharp (note) {
  switch (note) {
      case 'Bb': return 'A#';
      case 'Db': return 'C#';
      case 'Eb': return 'D#';
      case 'Gb': return 'F#';
      case 'Ab': return 'G#';
      default: return note;
  }
}

function noteValue (note, octave) {
    return octave * 12 + SCALE.indexOf(note);
}

function noteDistance (note1, octave1, note2, octave2) {
    return noteValue(note1, octave1) - function noteValue(note2, octave2);
} 

// It sorts the sample bank array by the absolute distance to the requested note.
// It then returns the sample with the shortest distance, which will be the first sample 
// n the sorted array.

function getNearestSample (sampleBank, note, octave) {
    let sortedBank = sampleBank.slice().sort((sampleA, sampleB))
}