import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesQuizComponent } from './scales-quiz.component';

describe('ScalesQuizComponent', () => {
  let component: ScalesQuizComponent;
  let fixture: ComponentFixture<ScalesQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalesQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
