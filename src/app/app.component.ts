import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PianoService } from './services/piano.service';
import { SoundService } from './services/sound.service';
import { PianoNote } from './core/piano-note';
import { PianoMode } from './core/piano-mode.enum';
import { StorageStepService } from './services/storage-step.service';
import { MajorScaleTutorial, MinorScaleTutorial, ScaleTutorial } from './scales-tutorial/scale-tutorial.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project';
  mode: PianoMode = PianoMode.Play;
  subscription: Subscription;
  scaleTutorial: ScaleTutorial;
  public step = 1;
  public substep = 1;
  public dottedKeys = [];
  public maxKeys = 2;
  public readyForNext = false;
  public nextHandler = false;
  public stepRate = 0;
  private saveStates = true;
  private scaleProgress = { major: false, minor: false };
  constructor(
    private storageService: StorageStepService,
    private pianoService: PianoService,
    private soundService: SoundService) {
    this.subscription = pianoService.notePlayed$.subscribe(note => this.handleNotePlayed(note));
  }

  async ngOnInit() {
    this.soundService.initialize();
    this.step = await this.storageService.getStep();
    this.stepRate = await this.storageService.getStepRate();
    const currentScaleName = await this.storageService.getScaleName();
    this.scaleTutorial = this.getScaleTutorial(currentScaleName);
    this.scaleProgress = await this.storageService.getScaleProgress();
  }

  handleKeyPlayed(keyId: number) {
    this.pianoService.playNoteByKeyId(keyId);
  }

  handleNotePlayed(note: PianoNote) {
    this.soundService.playNote(note.keyId);
  }

  next() {
    this.stepRate++;
    if (!this.nextHandler) {
      this.readyForNext = false;
      this.step++;
      return this.saveCurrentStates();
    }
    this.nextHandler = false;
    this.step--;
    if (this.scaleTutorial.scaleName === 'major') {
      this.scaleTutorial = this.getScaleTutorial('minor');
    } else { this.scaleTutorial = this.getScaleTutorial('major'); }
    return this.saveCurrentStates();
  }

  previous() {
    this.step--;
    this.stepRate--;
    this.saveCurrentStates();
  }

  saveCurrentStates() {
    if (this.saveStates) {
      this.storageService.setStep(this.step);
      this.storageService.setStepRate(this.stepRate);
    }
  }

  goToScales(scaleName: string) {
    this.scaleTutorial = this.getScaleTutorial(scaleName);
    this.next();
  }

  getScaleTutorial(scaleName: string) {
    if (scaleName === 'major') {
      return MajorScaleTutorial;
    } else {
      return MinorScaleTutorial;
    }
  }

  async handleScaleQuizSuccess(scaleResult: string) {
    this.scaleProgress = await this.storageService.getScaleProgress();
    this.scaleProgress[scaleResult] = true;
    this.readyForNext = true;
    this.storageService.setScaleProgress(scaleResult);
    if (this.scaleProgress[MajorScaleTutorial.scaleName]
      && this.scaleProgress[MinorScaleTutorial.scaleName]) {
      this.nextHandler = false;
    }

    if (!this.scaleProgress[MajorScaleTutorial.scaleName]
      && this.scaleProgress[MinorScaleTutorial.scaleName]) {
      this.storageService.setScaleName(MajorScaleTutorial.scaleName);
      this.nextHandler = true;
    }

    if (this.scaleProgress[MajorScaleTutorial.scaleName]
      && !this.scaleProgress[MinorScaleTutorial.scaleName]) {
      this.storageService.setScaleName(MinorScaleTutorial.scaleName);
      this.nextHandler = true;
    }
  }

  handleTutorialFinish(event: number) {
    if (event === 1) { this.stepRate = 0; }
    if (event === 5) { this.stepRate = 4; }
    this.step = event;
    this.saveCurrentStates();
  }

}
