import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleContribution } from './nouvelle-contribution';

describe('NouvelleContribution', () => {
  let component: NouvelleContribution;
  let fixture: ComponentFixture<NouvelleContribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleContribution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleContribution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
