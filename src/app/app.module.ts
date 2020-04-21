import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianoService } from './services/piano.service';
import { SoundService } from './services/sound.service';
import { StorageStepService } from './services/storage-step.service';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { CoverComponent } from './cover/cover.component';
import { ToneBasicsComponent } from './tone-basics/tone-basics.component';
import { IntervalCalculationComponent } from './interval-calculation/interval-calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    CoverComponent,
    ToneBasicsComponent,
    IntervalCalculationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    PianoService,
    SoundService,
    StorageStepService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
