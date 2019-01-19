import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Route, RouterModule } from '@angular/router';
import { PatientCardComponent } from './patient-card/patient-card.component';

const routes: Route[]= [
  {
    path:'',
    component:MainpageComponent
  },
  {
    path:'/patientQueue',
    redirectTo:'',
    pathMatch:'full'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainpageComponent, PatientCardComponent]
})
export class ConsultationPageModule { }
