import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StorageStepService } from '../services/storage-step.service';

@Component({
  selector: 'app-tone-basics',
  templateUrl: './tone-basics.component.html',
  styleUrls: ['./tone-basics.component.scss']
})
export class ToneBasicsComponent implements OnInit {
  public substep;
  public dottedKeys: number[] = [23, 24, 32, 33, 40, 42];
  @Output() finished = new EventEmitter<boolean>();
  @Output() keyPlayed = new EventEmitter<any>();
  @Input() maxKeys = -1;
  constructor(
    private storageService: StorageStepService,
  ) { }

  ngOnInit(): void {
    this.substep = 1;
    setTimeout(() => {
      this.finished.emit(false);
    }, 10);
  }

  nextSubstep() {
    this.substep++;
    this.storageService.setSubstep(this.substep);
    if (this.substep >= 3) { this.finished.emit(true); }
  }

  handleKeyPlayed(note: number) {
    this.keyPlayed.emit(note);
  }
}
