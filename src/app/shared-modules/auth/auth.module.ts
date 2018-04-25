import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from '../../../shareComponents/signup/signup.component';
import { SigninComponent } from '../../../shareComponents/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	declarations: [
		SigninComponent,
		SignupComponent
	],
	imports: [
		FormsModule,
		AuthRoutingModule
	]
})
export class AuthModule { }
