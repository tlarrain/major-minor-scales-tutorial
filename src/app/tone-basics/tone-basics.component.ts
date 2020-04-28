import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StorageStepService } from '../services/storage-step.service';
import { BaseComponent } from '../core/base-component';

@Component({
  selector: 'app-tone-basics',
  templateUrl: './tone-basics.component.html',
  styleUrls: ['./tone-basics.component.scss']
})
export class ToneBasicsComponent extends BaseComponent implements OnInit {
  public substep;
  public dottedKeys: number[] = [23, 24, 32, 33, 42, 44];
  public textOnKeys: any[] = [
    { number: 23, text: 'half-step' },
    { number: 24, text: '' },
    { number: 32, text: 'also half-step' },
    { number: 33, text: '' },
    { number: 42, text: 'whole-step' },
    { number: 44, text: '' },
  ];
  @Input() maxKeys = -1;
  constructor(
    private storageService: StorageStepService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.substep = 1;
    this.finished.emit(false);
  }

  nextSubstep() {
    this.substep++;
    this.storageService.setSubstep(this.substep);
    if (this.substep >= 3) { this.finished.emit(true); }
  }

}
