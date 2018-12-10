import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    TestComponent,
    HomeComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
  ]
})
export class DashboardModule { }
