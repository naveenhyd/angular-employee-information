import { Component } from '@angular/core';

@Component({
	selector: 'app-employee-layout',
	templateUrl: './employee-layout.component.html',
	styleUrls: ['./employee-layout.component.scss']
})
export class EmployeeLayoutComponent {
	items: any[] = [
		{
			label: 'Personal Information'
		},
		{
			label: 'Work Experience'
		},
		{
			label: 'Education'
		},
		{
			label: 'Skills'
		}
	];

	activeIndex: number = 0;


	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		// this.items = 
	}

	onNext() {
		if (this.activeIndex == this.items.length-1) {
			return;
		}
		this.activeIndex++;
	}

	onPrevious() {
		if (this.activeIndex == 0) {
			return;
		}
		this.activeIndex--;
	}

	onActiveIndexChange(event: any) {
		this.activeIndex = event;
	}
}
