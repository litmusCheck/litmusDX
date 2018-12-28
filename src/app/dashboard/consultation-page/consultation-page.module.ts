import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]= [
  {
    path:'',
    component:MainpageComponent
  },
  {
    path:'/consultation',
    redirectTo:'',
    pathMatch:'full'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainpageComponent]
})
export class ConsultationPageModule { }
