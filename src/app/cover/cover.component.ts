import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../core/base-component';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  next() {
    this.finished.emit(true);
  }

}
