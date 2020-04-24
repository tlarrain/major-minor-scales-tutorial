import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BaseComponent } from '../core/base-component';

@Component({
  selector: 'app-interval-calculation',
  templateUrl: './interval-calculation.component.html',
  styleUrls: ['./interval-calculation.component.scss']
})
export class IntervalCalculationComponent extends BaseComponent implements OnInit {
  public dottedKeys: number[] = [];
  public semitones: number = null;
  @Output() finished = new EventEmitter<boolean>();
  @Input() maxKeys: number;
  constructor() {
    super();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.finished.emit(true);
    }, 100);
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
      return this.dottedKeys = this.dottedKeys.concat(keyId);
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
      return this.semitones = this.dottedKeys[this.dottedKeys.length - 1] - this.dottedKeys[0];
    }
    return this.semitones = null;
  }

}
