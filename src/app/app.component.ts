import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PianoService } from './services/piano.service';
import { SoundService } from './services/sound.service';
import { PianoNote } from './core/piano-note';
import { PianoMode } from './core/piano-mode.enum';
import { StorageStepService } from './services/storage-step.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project';
  mode: PianoMode = PianoMode.Play;
  subscription: Subscription;
  public step = 1;
  public substep = 1;
  public dottedKeys = [];
  public maxKeys = 2;
  public readyForNext = false;
  private saveStates = false;
  constructor(
    private storageService: StorageStepService,
    private pianoService: PianoService,
    private soundService: SoundService) {
    this.subscription = pianoService.notePlayed$.subscribe(note => this.handleNotePlayed(note));
  }

  async ngOnInit() {
    this.soundService.initialize();
    this.step = (await this.storageService.getStep());
  }

  handleKeyPlayed(keyId: number) {
    this.pianoService.playNoteByKeyId(keyId);
  }

  handleNotePlayed(note: PianoNote) {
    this.soundService.playNote(note.keyId);
  }

  next() {
    this.readyForNext = false;
    this.step++;
    this.saveCurrentStates();
  }

  previous() {
    this.step--;
    this.saveCurrentStates();
  }

  saveCurrentStates() {
    if (this.saveStates) {
      this.storageService.setStep(this.step);
    }
  }

}
