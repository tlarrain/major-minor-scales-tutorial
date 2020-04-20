import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PianoService } from './core/piano.service';
import { SoundService } from './core/sound.service';
import { PianoNote } from './core/piano-note';
import { PianoMode } from './core/piano-mode.enum';


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

  constructor(
    private pianoService: PianoService,
    private soundService: SoundService) {
    this.subscription = pianoService.notePlayed$.subscribe(note => this.handleNotePlayed(note));
  }

  ngOnInit() {
    this.soundService.initialize();
  }

  handleKeyPlayed(keyId: number) {
    this.pianoService.playNoteByKeyId(keyId);
  }

  handleNotePlayed(note: PianoNote) {
    this.soundService.playNote(note.keyId);
  }

  next() {
    this.step++;
    this.substep = 1;
  }

  nextSubstep() {
    this.substep++;
  }
}
