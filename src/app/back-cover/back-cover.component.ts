import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../core/base-component';
import { StorageStepService } from '../services/storage-step.service';

@Component({
  selector: 'app-back-cover',
  templateUrl: './back-cover.component.html',
  styleUrls: ['./back-cover.component.scss']
})
export class BackCoverComponent extends BaseComponent implements OnInit {

  constructor(
    private storageService: StorageStepService,
  ) {
    super();
  }

  ngOnInit(): void {
  }

  goToCover() {
    this.storageService.resetStorage();
    this.finished.emit(1);
  }

  goToScales() {
    this.storageService.resetScaleProgress();
    this.storageService.setStepRate(5);
    this.finished.emit(5);
  }

}
