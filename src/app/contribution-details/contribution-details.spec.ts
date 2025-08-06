import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionDetails } from './contribution-details';

describe('ContributionDetails', () => {
  let component: ContributionDetails;
  let fixture: ComponentFixture<ContributionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
