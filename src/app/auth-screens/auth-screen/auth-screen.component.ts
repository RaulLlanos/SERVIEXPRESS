import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.component.html',
  styleUrls: ['./auth-screen.component.scss'],
  standalone: true,
  imports: [CommonModule, SignInComponent, SignUpComponent, ResetPasswordComponent],
})
export class AuthScreenComponent {
  segmentValue= '1';

  segmentChanged(selectedValue: string) {
    console.log(selectedValue);
    this.segmentValue = selectedValue;
  }

}
