import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalulatorComponent } from './calulator.component';

describe('CalulatorComponent', () => {
  let component: CalulatorComponent;
  let fixture: ComponentFixture<CalulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
