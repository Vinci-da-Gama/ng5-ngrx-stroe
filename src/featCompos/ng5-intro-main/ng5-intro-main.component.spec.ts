import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5IntroMainComponent } from './ng5-intro-main.component';

describe('Ng5IntroMainComponent', () => {
	let component: Ng5IntroMainComponent;
	let fixture: ComponentFixture<Ng5IntroMainComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Ng5IntroMainComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Ng5IntroMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
