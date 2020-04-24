import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesMenuComponent } from './scales-menu.component';

describe('ScalesMenuComponent', () => {
  let component: ScalesMenuComponent;
  let fixture: ComponentFixture<ScalesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
