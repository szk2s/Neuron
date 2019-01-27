/* @flow */
declare type Partial = {
  id: number,
  startTime: number,
  endTime: number,
  timecode: Array<number>,
  amps: Array<number>,
  freqs: Array<number>
};

declare type Melody = {
  id: number,
  startTime: number,
  endTime: number,
  timecode: Array<number>,
  amps: Array<number>,
  noteOnOffs: Array<$Values<NoteStatus>>,
  midiNoteNums: Array<number | null>,
  deltaCents: Array<number | null>
};

declare type NoteStatus = $ReadOnly<{
  ON: 1,
  OFF: -1,
  NO_EVENT: 0
}>;