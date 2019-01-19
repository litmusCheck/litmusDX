import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedfilesModule } from '../sharedfiles/sharedfiles.module';
import { ConcatestrPipe } from '../_pipe/concatestr.pipe';
import { SingleeleComponent } from './singleele/singleele.component';
import { ChangePasswordOnloginComponent } from './change-password-onlogin/change-password-onlogin.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedfilesModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TestComponent,
    HomeComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    SideMenuComponent,
    ConcatestrPipe,
    SingleeleComponent,
    ChangePasswordOnloginComponent
  ],
  exports: [
    TestComponent,
  ]
})
export class DashboardModule {
  
}
