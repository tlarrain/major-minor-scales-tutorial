import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

const STEP_KEY = 'step';
const SUBSTEP_KEY = 'substep';
const SCALE_NAME = 'scaleName';
const SCALE_PROGRESS = 'scaleProgress';
const STEP_RATE = 'stepRate';
@Injectable()
export class StorageStepService {

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  public async getStep() {
    return await this.storage.get(STEP_KEY) || 1;
  }

  public setStep(step: number) {
    this.storage.set(STEP_KEY, step);
  }

  public async getSubstep() {
    return await this.storage.get(SUBSTEP_KEY) || 1;
  }

  public setSubstep(substep: number) {
    this.storage.set(SUBSTEP_KEY, substep);
  }

  public setStepRate(stepRate: number) {
    this.storage.set(STEP_RATE, stepRate);
  }

  public async getStepRate() {
    return await this.storage.get(STEP_RATE) || 0;
  }

  public resetStepRate() {
    this.storage.set(STEP_RATE, 0);
  }

  public async getScaleName() {
    return await this.storage.get(SCALE_NAME) || 'major';
  }

  public setScaleName(scaleName: string) {
    this.storage.set(SCALE_NAME, scaleName);
  }

  public async getScaleProgress() {
    return await this.storage.get(SCALE_PROGRESS) || { major: false, minor: false };
  }

  public async setScaleProgress(doneScale: string) {
    const scaleProgress = await this.storage.get(SCALE_PROGRESS) || { major: false, minor: false };
    scaleProgress[doneScale] = true;
    this.storage.set(SCALE_PROGRESS, scaleProgress);
  }

  public async resetScaleProgress() {
    this.storage.set(SCALE_PROGRESS, { major: false, minor: false });
  }

  public resetStorage() {
    this.storage.clear();
  }
}
