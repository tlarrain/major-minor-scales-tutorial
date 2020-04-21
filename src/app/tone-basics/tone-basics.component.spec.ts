import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneBasicsComponent } from './tone-basics.component';

describe('ToneBasicsComponent', () => {
  let component: ToneBasicsComponent;
  let fixture: ComponentFixture<ToneBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
