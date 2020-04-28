import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianoService } from './services/piano.service';
import { SoundService } from './services/sound.service';
import { StorageStepService } from './services/storage-step.service';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { CoverComponent } from './cover/cover.component';
import { ToneBasicsComponent } from './tone-basics/tone-basics.component';
import { IntervalCalculationComponent } from './interval-calculation/interval-calculation.component';
import { ToneBasicsQuizComponent } from './tone-basics-quiz/tone-basics-quiz.component';
import { ScalesMenuComponent } from './scales-menu/scales-menu.component';
import { ScalesTutorialComponent } from './scales-tutorial/scales-tutorial.component';
import { ScalesQuizComponent } from './scales-quiz/scales-quiz.component';
import { BackCoverComponent } from './back-cover/back-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    CoverComponent,
    ToneBasicsComponent,
    IntervalCalculationComponent,
    ToneBasicsQuizComponent,
    ScalesMenuComponent,
    ScalesTutorialComponent,
    ScalesQuizComponent,
    BackCoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NgDragDropModule.forRoot(),
    FormsModule,
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
