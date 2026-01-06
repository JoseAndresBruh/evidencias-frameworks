import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secundaria } from './secundaria';

describe('Secundaria', () => {
  let component: Secundaria;
  let fixture: ComponentFixture<Secundaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secundaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secundaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
