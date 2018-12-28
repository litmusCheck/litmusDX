import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { HelpandsupportComponent } from '../sharedfiles/helpandsupport/helpandsupport.component';

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
  {
    path:'help&support',
    component:HelpandsupportComponent
  },
  {
    path:'profile-settings',
    loadChildren:'./user-settings/user-settings.module#UserSettingsModule',
  },
  {
    path:'consultations',
    loadChildren:'./consultation-page/consultation-page.module#ConsultationPageModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
