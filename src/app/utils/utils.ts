export function convertTonesToString(tones: number[]) {
  let output = '';
  tones.forEach(tone => {
    output = output + (tone === 2 ? 'Tone' : 'Semitone') + ' - ';
  });
  output = output.substring(0, output.length - 3);
  return output;
}