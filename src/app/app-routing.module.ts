import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RulefetchComponent } from './rulefetch/rulefetch.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'details', component: RulefetchComponent },
  {path: "login", component: LoginComponent},
  {path: "userreg", component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
