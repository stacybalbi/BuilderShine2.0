import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterDetailsComponent } from './cost-center-details.component';

describe('CostCenterDetailsComponent', () => {
  let component: CostCenterDetailsComponent;
  let fixture: ComponentFixture<CostCenterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCenterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
