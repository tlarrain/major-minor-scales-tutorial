import { Output, EventEmitter } from '@angular/core';

export class BaseComponent {
  @Output() keyPlayed = new EventEmitter<any>();
  constructor() { }

  handleKeyPlayed(note: number) {
    this.keyPlayed.emit(note);
  }
}
