import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BaseComponent } from '../core/base-component';

@Component({
  selector: 'app-tone-basics-quiz',
  templateUrl: './tone-basics-quiz.component.html',
  styleUrls: ['./tone-basics-quiz.component.scss']
})
export class ToneBasicsQuizComponent extends BaseComponent implements OnInit {
  public toneBasicsQuiz = {
    dottedKeys: [20, 30],
    options: [4, 5, 6, 10],
    answer: 10,
  };
  public userAnswer: number;
  public dottedKeys: number[] = [];
  public semitones: number = null;
  @Output() finished = new EventEmitter<boolean>();
  @Input() maxKeys: number;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.dottedKeys = this.toneBasicsQuiz.dottedKeys;
  }

  checkAnswer() {
    if (this.isAnswerCorrect()) {
      return this.finished.emit(true);
    }
  }

  isAnswerCorrect() {
    return this.userAnswer === this.toneBasicsQuiz.answer;
  }

}
