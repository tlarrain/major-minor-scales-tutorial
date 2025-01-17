import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { IPianoKey } from './ipiano-key';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() keyPlayed = new EventEmitter<number>();
  @Input() dottedKeys = [];
  @Input() textOnKeys = [];
  pianoKeys: IPianoKey[];
  private highlightedKeyId = 0;

  constructor() {
    this.pianoKeys = [
      { whiteKeyId: 16 },
      { whiteKeyId: 18, blackKeyId: 17 },
      { whiteKeyId: 20, blackKeyId: 19 },
      { whiteKeyId: 21 },
      { whiteKeyId: 23, blackKeyId: 22 },
      { whiteKeyId: 25, blackKeyId: 24 },
      { whiteKeyId: 27, blackKeyId: 26 },
      { whiteKeyId: 28 },
      { whiteKeyId: 30, blackKeyId: 29 },
      { whiteKeyId: 32, blackKeyId: 31 },
      { whiteKeyId: 33 },
      { whiteKeyId: 35, blackKeyId: 34 },
      { whiteKeyId: 37, blackKeyId: 36 },
      { whiteKeyId: 39, blackKeyId: 38 },
      { whiteKeyId: 40 },
      { whiteKeyId: 42, blackKeyId: 41 },
      { whiteKeyId: 44, blackKeyId: 43 },
      { whiteKeyId: 45 },
      { whiteKeyId: 47, blackKeyId: 46 },
      { whiteKeyId: 49, blackKeyId: 48 },
      { whiteKeyId: 51, blackKeyId: 50 },
      { whiteKeyId: 52 },
      { whiteKeyId: 54, blackKeyId: 53 },
      { whiteKeyId: 56, blackKeyId: 55 },
      { whiteKeyId: 57 },
      { whiteKeyId: 59, blackKeyId: 58 },
      { whiteKeyId: 61, blackKeyId: 60 },
      { whiteKeyId: 63, blackKeyId: 62 },
      { whiteKeyId: 64 }
    ];
  }

  ngOnInit() {
  }

  keyPress(keyNumber: number) {
    this.keyPlayed.emit(keyNumber);
  }

  getColor(keyId: number) {
    if (keyId === this.highlightedKeyId) {
      return '#f0e68c';
    }
    else {
      return '';
    }
  }

  isKeyDotted(keyNumber: number) {
    if (!this.dottedKeys) { return false; }
    return this.dottedKeys.indexOf(keyNumber) > -1;
  }

  barForKey(keyNumber: number) {
    if (!this.textOnKeys) { return false; }
    for (const key of this.textOnKeys) {
      if (key.number === keyNumber) {
        return true;
      }
    }
    return false;
  }
  textForKey(keyNumber: number) {
    if (!this.textOnKeys) { return false; }
    for (const key of this.textOnKeys) {
      if (key.number === keyNumber) {
        return key.text;
      }
    }
    return '';
  }

}
