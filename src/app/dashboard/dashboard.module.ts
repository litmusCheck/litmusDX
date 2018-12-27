import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { SharedfilesModule } from '../sharedfiles/sharedfiles.module';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedfilesModule
  ],
  declarations: [
    TestComponent,
    HomeComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    SideMenuComponent,
  ],
  exports: [
  ]
})
export class DashboardModule { }
