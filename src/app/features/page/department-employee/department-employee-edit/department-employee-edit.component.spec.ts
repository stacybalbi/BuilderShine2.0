import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEmployeeEditComponent } from './department-employee-edit.component';

describe('DepartmentEmployeeEditComponent', () => {
  let component: DepartmentEmployeeEditComponent;
  let fixture: ComponentFixture<DepartmentEmployeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEmployeeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
