import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneBasicsQuizComponent } from './tone-basics-quiz.component';

describe('ToneBasicsQuizComponent', () => {
  let component: ToneBasicsQuizComponent;
  let fixture: ComponentFixture<ToneBasicsQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneBasicsQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneBasicsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
