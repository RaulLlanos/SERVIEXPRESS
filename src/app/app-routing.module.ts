import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth-screens/auth-screen/sign-in/sign-in.component';
import { AuthScreenComponent } from './auth-screens/auth-screen/auth-screen.component';

const routes: Routes = [
{
  path: '',
  loadChildren: ()=>import('./public/public.module').then((m)=>m.PublicModule),
},
{
  path: 'auth-screen',
  component: AuthScreenComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
