import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplay } from './card-display';

describe('CardDisplay', () => {
  let component: CardDisplay;
  let fixture: ComponentFixture<CardDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
