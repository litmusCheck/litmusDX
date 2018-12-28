import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAvailabilityComponent } from './my-availability/my-availability.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path:'',
    component:UserDetailsComponent
  },
  {
    path:'set-availability',
    component:MyAvailabilityComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MyAvailabilityComponent, UserDetailsComponent]
})
export class UserSettingsModule { }
