import { Component, OnInit, Input } from '@angular/core';
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
  public textOnKeys: any[];
  scalePattern: string;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.textOnKeys = [
      {
        number: this.tutorialDetails.startingKey.number,
        text: 'This is ' + this.tutorialDetails.startingKey.name,
      }
    ];
    this.dottedKeys = [this.tutorialDetails.startingKey.number];
    this.getTonesPattern();
    this.finished.emit(true);
  }

  getTonesPattern() {
    this.scalePattern = convertTonesToString(this.tutorialDetails.scalePattern);
  }

}
