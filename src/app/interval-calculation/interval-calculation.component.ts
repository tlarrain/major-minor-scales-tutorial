import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../core/base-component';

@Component({
  selector: 'app-interval-calculation',
  templateUrl: './interval-calculation.component.html',
  styleUrls: ['./interval-calculation.component.scss']
})
export class IntervalCalculationComponent extends BaseComponent implements OnInit {
  public dottedKeys: number[] = [];
  public semitones: number = null;
  @Input() maxKeys: number;
  constructor() {
    super();
  }

  ngOnInit(): void {

  }

  handleKeyPlayed(note: number) {
    this.keyPlayed.emit(note);
    this.updateDottedKeys(note);
    this.updateIntervalValue();
  }

  updateDottedKeys(keyId: number) {
    this.dottedKeys.sort();
    const index = this.dottedKeys.indexOf(keyId);
    if (index !== -1) { return this.dottedKeys.splice(index, 1); }
    if (this.maxKeys === -1 || !this.isDottedKeysArrayFull()) {
      this.dottedKeys = this.dottedKeys.concat(keyId);
      return this.dottedKeys.sort();
    }
    for (let i = 0; i < this.dottedKeys.length; i++) {
      if (this.dottedKeys[i] > keyId) {
        this.dottedKeys[i] = keyId;
        break;
      }
    }
    if (this.dottedKeys[this.dottedKeys.length - 1] < keyId) {
      this.dottedKeys[this.dottedKeys.length - 1] = keyId;
    }
  }

  isDottedKeysArrayFull() {
    return !(this.dottedKeys.length < this.maxKeys);
  }

  updateIntervalValue() {
    if (this.isDottedKeysArrayFull()) {
      this.finished.emit(true);
      return this.semitones = this.dottedKeys[this.dottedKeys.length - 1] - this.dottedKeys[0];
    }
    return this.semitones = null;
  }

}
