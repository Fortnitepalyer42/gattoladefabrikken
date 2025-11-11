import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeck } from './main-deck';

describe('MainDeck', () => {
  let component: MainDeck;
  let fixture: ComponentFixture<MainDeck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDeck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDeck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
