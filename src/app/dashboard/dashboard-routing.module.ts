import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Route[]= [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'test',
    component:TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { 

}
