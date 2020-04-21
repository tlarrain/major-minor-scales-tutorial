import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

const STEP_KEY = 'step';
const SUBSTEP_KEY = 'substep';

@Injectable()
export class StorageStepService {

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  public async getStep() {
    return await this.storage.get(STEP_KEY) || 1;
  }

  public async getSubstep() {
    return await this.storage.get(SUBSTEP_KEY) || 1;
  }

  public setStep(step: number) {
    this.storage.set(STEP_KEY, step);
  }

  public setSubstep(substep: number) {
    this.storage.set(SUBSTEP_KEY, substep);
  }
}
