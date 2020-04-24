import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesTutorialComponent } from './scales-tutorial.component';

describe('ScalesTutorialComponent', () => {
  let component: ScalesTutorialComponent;
  let fixture: ComponentFixture<ScalesTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalesTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
