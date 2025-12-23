import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCounter } from './primary-counter';

describe('PrimaryCounter', () => {
  let component: PrimaryCounter;
  let fixture: ComponentFixture<PrimaryCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
