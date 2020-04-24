export interface ScaleTutorial {
  scaleName: string;
  scalePattern: number[];
  hint: string;
  startingKey: { name: string, number: number };
  startingKeyHint: string;
}


export const MajorScaleTutorial: ScaleTutorial = {
  scaleName: 'major',
  scalePattern: [2, 2, 1, 2, 2, 2, 1],
  hint: 'is the pattern starting from C and playing the white keys',
  startingKey: {
    name: 'C',
    number: 28,
  },
  startingKeyHint: 'right before the 2 black keys together',
};
