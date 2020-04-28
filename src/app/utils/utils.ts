export function convertTonesToString(tones: number[]) {
  let output = '';
  tones.forEach(tone => {
    output = output + (tone === 2 ? 'Tone' : 'Semitone') + ' - ';
  });
  output = output.substring(0, output.length - 3);
  return output;
}

export function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function convertScaleToTones(scale: number[]) {
  let output: number[] = [];
  for (let i = 1; i < scale.length; i++) {
    output = output.concat(scale[i] - scale[i - 1]);
  }
  return output;
}
