import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEmployeeCreateComponent } from './department-employee-create.component';

describe('DepartmentEmployeeCreateComponent', () => {
  let component: DepartmentEmployeeCreateComponent;
  let fixture: ComponentFixture<DepartmentEmployeeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEmployeeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEmployeeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
