import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationService } from './_service/authentication.service';
import { AlertService } from './_service/alert.service';
import { CustomerLoginService } from './_service/customer-login.service';
import { TestDirective } from './_directive/test.directive';
import { ModalComponent } from './_directive/modal/modal.component';
import { DialogOpenService } from './_service/dialog-open.service';
import { RegisterationService } from './_service/registeration.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlashMessagesModule } from 'angular2-flash-messages/module';

//import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterFormComponent,
    ForgotPasswordComponent,
    TestDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    AuthenticationService,
    AlertService,
    CustomerLoginService,
    DialogOpenService,
    RegisterationService
   // Location, { provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
