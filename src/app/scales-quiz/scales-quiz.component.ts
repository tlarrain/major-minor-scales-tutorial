import { Component, OnInit, Input } from '@angular/core';
import { ScaleTutorial } from '../scales-tutorial/scale-tutorial.constants';
import { BaseComponent } from '../core/base-component';
import { MINOR_SCALE_QUIZ_ROOTS, MAJOR_SCALE_QUIZ_ROOTS } from '../constants/scale-quiz-roots';
import { getRandomInteger, convertScaleToTones } from '../utils/utils';
import { KeyboardKey } from '../scales-tutorial/scale-tutorial.constants';

@Component({
  selector: 'app-scales-quiz',
  templateUrl: './scales-quiz.component.html',
  styleUrls: ['./scales-quiz.component.scss']
})
export class ScalesQuizComponent extends BaseComponent implements OnInit {
  @Input() tutorialDetails: ScaleTutorial;
  @Input() maxKeys: number;
  public dottedKeys: number[] = [];
  public quizResult = false;
  public quizTry = false;
  private quizRoot: KeyboardKey;
  private quizChoices: KeyboardKey[];
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.quizChoices = this.tutorialDetails.scaleName === 'minor' ? MINOR_SCALE_QUIZ_ROOTS : MAJOR_SCALE_QUIZ_ROOTS;
    const quizRootIdx = getRandomInteger(0, this.quizChoices.length);
    this.quizRoot = this.quizChoices[quizRootIdx];
    this.dottedKeys = this.dottedKeys.concat(this.quizRoot.number);
  }

  handleKeyPlayed(note: number) {
    this.keyPlayed.emit(note);
    this.updateDottedKeys(note);
  }

  updateDottedKeys(keyId: number) {
    if (keyId < this.quizRoot.number) {
      return;
    }
    this.dottedKeys.sort();
    const index = this.dottedKeys.indexOf(keyId);
    if (keyId === this.quizRoot.number) { return; }
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

  testResult() {
    this.quizTry = true;
    const tones = convertScaleToTones(this.dottedKeys);
    this.quizResult = JSON.stringify(tones) === JSON.stringify(this.tutorialDetails.scalePattern);
    if (this.quizResult) { return this.finished.emit(this.tutorialDetails.scaleName); }
  }

}
