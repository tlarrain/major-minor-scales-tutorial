import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalCalculationComponent } from './interval-calculation.component';

describe('IntervalCalculationComponent', () => {
  let component: IntervalCalculationComponent;
  let fixture: ComponentFixture<IntervalCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
