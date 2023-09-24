import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthScreenRoutingModule } from './auth-screen-routing.module';
import { AuthScreenComponent } from './auth-screen.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AuthScreenComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthScreenRoutingModule
  ]
})
export class AuthScreenModule { }
