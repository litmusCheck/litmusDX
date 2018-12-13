import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guard/auth.guard';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Route[] = [
  {
    path:'', 
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'dashboard',
  //   component:HomeComponent,
  //   canActivate:[AuthGuard]
  //  },
  {
    path:'login/new-register',
    redirectTo:'/new-register',
    pathMatch:'full'
  },
  {
    path:'login/new-register',
    component:RegisterFormComponent
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
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
