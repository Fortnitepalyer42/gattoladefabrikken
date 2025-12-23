import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryContainer } from './primary-container';

describe('PrimaryContainer', () => {
  let component: PrimaryContainer;
  let fixture: ComponentFixture<PrimaryContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
