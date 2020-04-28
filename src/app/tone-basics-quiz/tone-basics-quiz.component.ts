import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BaseComponent } from '../core/base-component';
import { TONE_BASICS_QUIZZES } from './tone-basics-quiz.constants';
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
  public quizNumber = 0;
  public totalQuizzes = TONE_BASICS_QUIZZES.length;
  @Output() finished = new EventEmitter<boolean>();
  @Input() maxKeys: number;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.uptadeCurrentQuiz();
  }

  checkAnswer() {
    if (this.isAnswerCorrect()) {
      this.quizNumber++;
      if (this.quizNumber === this.totalQuizzes) {
        return this.finished.emit(true);
      }
      setTimeout(() => {
        this.uptadeCurrentQuiz();
      }, 1000);
    }
  }

  uptadeCurrentQuiz() {
    this.toneBasicsQuiz = TONE_BASICS_QUIZZES[this.quizNumber];
    this.dottedKeys = this.toneBasicsQuiz.dottedKeys;
  }

  isAnswerCorrect() {
    return this.userAnswer === this.toneBasicsQuiz.answer;
  }

}
