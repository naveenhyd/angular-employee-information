import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWorkExperienceComponent } from './employee-work-experience.component';

describe('EmployeeWorkExperienceComponent', () => {
  let component: EmployeeWorkExperienceComponent;
  let fixture: ComponentFixture<EmployeeWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWorkExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
