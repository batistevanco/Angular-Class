import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratieOefening } from './registratie-oefening';

describe('RegistratieOefening', () => {
  let component: RegistratieOefening;
  let fixture: ComponentFixture<RegistratieOefening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistratieOefening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratieOefening);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
