import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';

const routes: Routes = [
	{
		path: '',
		component: EmployeeLayoutComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule { }
