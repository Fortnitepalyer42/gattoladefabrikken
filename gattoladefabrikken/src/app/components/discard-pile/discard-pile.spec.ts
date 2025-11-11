import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardPile } from './discard-pile';

describe('DiscardPile', () => {
  let component: DiscardPile;
  let fixture: ComponentFixture<DiscardPile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardPile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardPile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
