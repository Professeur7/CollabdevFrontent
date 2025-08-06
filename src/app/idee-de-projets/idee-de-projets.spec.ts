import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeDeProjets } from './idee-de-projets';

describe('IdeeDeProjets', () => {
  let component: IdeeDeProjets;
  let fixture: ComponentFixture<IdeeDeProjets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeeDeProjets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeeDeProjets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
