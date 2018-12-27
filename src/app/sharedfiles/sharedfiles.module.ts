import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpandsupportComponent } from './helpandsupport/helpandsupport.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelpandsupportComponent
  ],
  exports:[
    HelpandsupportComponent
  ]
})
export class SharedfilesModule { }
