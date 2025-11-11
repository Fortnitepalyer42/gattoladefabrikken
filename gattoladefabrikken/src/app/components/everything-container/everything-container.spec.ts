import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingContainer } from './everything-container';

describe('EverythingContainer', () => {
  let component: EverythingContainer;
  let fixture: ComponentFixture<EverythingContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EverythingContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverythingContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
