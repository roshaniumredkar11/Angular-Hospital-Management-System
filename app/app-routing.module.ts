import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [

  {
    path:'signin',
    component:SigninComponent

  },
  {
    path:'signup',
    component:SignupComponent

  },
  {
    path:'doctors',
    component:DoctorsComponent

  },
  {
    path:'patients',
    component:PatientsComponent

  },
  {
    path:'staff',
    component:StaffComponent

  },
  {
    path:'billing',
    component:BillingComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
