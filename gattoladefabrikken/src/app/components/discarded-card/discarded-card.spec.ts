import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardedCard } from './discarded-card';

describe('DiscardedCard', () => {
  let component: DiscardedCard;
  let fixture: ComponentFixture<DiscardedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardedCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
