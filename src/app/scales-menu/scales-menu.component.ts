import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scales-menu',
  templateUrl: './scales-menu.component.html',
  styleUrls: ['./scales-menu.component.scss']
})
export class ScalesMenuComponent implements OnInit {
  public scales: string[];
  public isHappyCorrect = false;
  public isSadCorrect = false;
  public audio = new Audio();
  @Output() finished = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.scales = ['Major scale', 'Minor scale'];
  }

  playScale(scaleName: string) {
    if (scaleName === 'Major scale') { return this.playMajorScale(); }
    return this.playMinorScale();
  }

  playMajorScale() {
    if (this.audio.paused) {
      this.audio.src = '../../assets/scales/scale_c_major.mp3';
      this.audio.load();
      this.audio.play();
    }
  }

  playMinorScale() {
    if (this.audio.paused) {
      this.audio.src = '../../assets/scales/scale_c_minor.mp3';
      this.audio.load();
      this.audio.play();
    }
  }

  isQuizDone() {
    return this.isHappyCorrect && this.isSadCorrect;
  }

  drop(e, feeling) {
    if (!this.isHappyCorrect) {
      this.isHappyCorrect = (e.dragData === 'Major scale' && feeling === 'Happy');
    }

    if (!this.isSadCorrect) {
      this.isSadCorrect = (e.dragData === 'Minor scale' && feeling === 'Sad');
    }

  }

  nextScale(scale: string) {
    this.finished.emit(scale);
  }

}
