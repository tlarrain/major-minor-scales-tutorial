export interface KeyboardKey {
  name: string;
  number: number;
}
export interface ScaleTutorial {
  scaleName: string;
  scaleFeeling: string;
  scalePattern: number[];
  hint: string;
  startingKey: KeyboardKey;
  startingKeyHint: string;
}


export const MajorScaleTutorial: ScaleTutorial = {
  scaleName: 'major',
  scaleFeeling: 'happy',
  scalePattern: [2, 2, 1, 2, 2, 2, 1],
  hint: 'is the pattern starting from C and playing the white keys',
  startingKey: {
    name: 'C',
    number: 28,
  },
  startingKeyHint: 'right before the 2 black keys together',
};

export const MinorScaleTutorial: ScaleTutorial = {
  scaleName: 'minor',
  scaleFeeling: 'sad',
  scalePattern: [2, 1, 2, 2, 1, 2, 2],
  hint: 'is the pattern starting from A and playing the white keys',
  startingKey: {
    name: 'A',
    number: 37,
  },
  startingKeyHint: 'Between the 2nd and 3rd black notes in the 3-pattern',
};