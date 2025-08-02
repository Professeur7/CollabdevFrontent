import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeesDeProjets } from './idees-de-projets';

describe('IdeesDeProjets', () => {
  let component: IdeesDeProjets;
  let fixture: ComponentFixture<IdeesDeProjets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeesDeProjets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeesDeProjets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
