import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterCardComponent } from './better-card.component';

describe('BetterCardComponent', () => {
  let component: BetterCardComponent;
  let fixture: ComponentFixture<BetterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
