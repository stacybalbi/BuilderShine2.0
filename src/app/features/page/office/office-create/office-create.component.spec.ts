import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCreateComponent } from './office-create.component';

describe('OfficeCreateComponent', () => {
  let component: OfficeCreateComponent;
  let fixture: ComponentFixture<OfficeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
