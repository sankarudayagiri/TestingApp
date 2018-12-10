import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowWidthComponent } from './window-width.component';

describe('WindowWidthComponent', () => {
  let component: WindowWidthComponent;
  let fixture: ComponentFixture<WindowWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
