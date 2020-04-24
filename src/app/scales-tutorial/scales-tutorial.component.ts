import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScaleTutorial } from './scale-tutorial.constants';
import { BaseComponent } from '../core/base-component';
import { convertTonesToString } from '../utils/utils';
@Component({
  selector: 'app-scales-tutorial',
  templateUrl: './scales-tutorial.component.html',
  styleUrls: ['./scales-tutorial.component.scss']
})
export class ScalesTutorialComponent extends BaseComponent implements OnInit {
  @Input() tutorialDetails: ScaleTutorial;
  @Input() dottedKeys: number[];
  @Output() finished = new EventEmitter<boolean>();
  scalePattern: string;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.dottedKeys = [this.tutorialDetails.startingKey.number];
    this.getTonesPattern();
    setTimeout(() => {
      this.finished.emit(true);
    }, 100);
  }

  getTonesPattern() {
    this.scalePattern = convertTonesToString(this.tutorialDetails.scalePattern);
  }

}
