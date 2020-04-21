import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Output() finished = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.finished.emit(true);
  }

}
