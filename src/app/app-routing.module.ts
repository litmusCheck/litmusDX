import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guard/auth.guard';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppComponent } from './app.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
//import { TestComponent } from './dashboard/test/test.component';


const routes: Route[] = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'', 
    redirectTo:'/login',
    pathMatch:'full'
  },
  // {
  //   path:'dashboard',
  //   component:HomeComponent,
  //   canActivate:[AuthGuard]
  //  },
  {
    path:'new-register',
    component:RegisterFormComponent
  },
  {
    path:'login/new-register',
    redirectTo:'/new-register',
    pathMatch:'full'
  },
  {
    path:'login/password-forgot',
    component:ForgotPasswordComponent
  },
  {
    path:'dashboard',
    loadChildren:'./dashboard/dashboard.module#DashboardModule',
    canActivate:[AuthGuard]
  },
  {
    path:'login/home',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'applicationStatus',
    component:ApplicationStatusComponent
  },
  {
    path:'app',
    component:AppComponent
  },
  // {
  //   path:'help&support',
  //   loadChildren:'./test-module/test-module.module#TestModuleModule'
  // },
  // {
  //   path:'login/help&support',
  //   redirectTo:'/help&support',
  //   pathMatch:'full'
  // },
  // {
  //   path:'usepipe',
  //   component:TestComponent
  // },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
 // imports: [RouterModule.forRoot(routes, { useHash:true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
