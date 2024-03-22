import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { StepsModule } from 'primeng/steps';


import { EmployeePersonalInfoComponent } from './employee-personal-info/employee-personal-info.component';
import { EmployeeWorkExperienceComponent } from './employee-work-experience/employee-work-experience.component';
import { EmployeeEducationComponent } from './employee-education/employee-education.component';
import { EmployeeSkillsComponent } from './employee-skills/employee-skills.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';


@NgModule({
	declarations: [
		EmployeePersonalInfoComponent,
		EmployeeWorkExperienceComponent,
		EmployeeEducationComponent,
		EmployeeSkillsComponent,
		EmployeeLayoutComponent
	],
	imports: [
		CommonModule,
		EmployeeRoutingModule,
		StepsModule
	],
	bootstrap: [EmployeeLayoutComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeModule { }
