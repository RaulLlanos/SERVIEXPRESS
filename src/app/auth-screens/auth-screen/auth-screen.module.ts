import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthScreenRoutingModule } from './auth-screen-routing.module';
import { AuthScreenComponent } from './auth-screen.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthScreenComponent
  ],
  imports: [
    CommonModule,
    AuthScreenRoutingModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthScreenModule { }
