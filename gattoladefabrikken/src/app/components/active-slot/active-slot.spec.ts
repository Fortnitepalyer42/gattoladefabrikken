import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSlot } from './active-slot';

describe('ActiveSlot', () => {
  let component: ActiveSlot;
  let fixture: ComponentFixture<ActiveSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveSlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
