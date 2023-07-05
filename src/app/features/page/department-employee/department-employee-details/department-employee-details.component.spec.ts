import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEmployeeDetailsComponent } from './department-employee-details.component';

describe('DepartmentEmployeeDetailsComponent', () => {
  let component: DepartmentEmployeeDetailsComponent;
  let fixture: ComponentFixture<DepartmentEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
