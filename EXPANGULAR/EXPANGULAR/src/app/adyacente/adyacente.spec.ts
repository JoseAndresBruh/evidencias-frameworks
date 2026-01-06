import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adyacente } from './adyacente';

describe('Adyacente', () => {
  let component: Adyacente;
  let fixture: ComponentFixture<Adyacente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adyacente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adyacente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
