import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doclogindtl } from '../model/doclogindtl';
import { AuthenticationService } from '../_service/authentication.service';
import { AlertService } from '../_service/alert.service';
import { CustomerLoginService } from '../_service/customer-login.service';
import { DialogOpenService } from '../_service/dialog-open.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  checkerOTP = false;
  verifyOTPValue = false;
  emailForPassChange: string;
  private userInput: Doclogindtl;
  validateLogin = false;
  private docDtl : User;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private loginService: CustomerLoginService,
    private dialogOpenService: DialogOpenService,
    private http: HttpClient,
    private flashMessage:FlashMessagesService
    ) {
      this.userInput = new Doclogindtl();
      this.docDtl = new User();
    }

  ngOnInit() {
   // this.testmessagess();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
 // this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  testmessagess(){
    this.flashMessage.show('show successfull messages', { cssClass: 'alert-success', timeout: 2000 });    
  }

  onSubmit() {
    this.submitted = true;
    this.validateLogin = false;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;

    this.userInput.userId = this.f.email.value;
    this.userInput.loginPwd = this.f.password.value;
     this.loginService.getLitmusUserLogindTL(this.userInput).subscribe(
      resp => {
        this.docDtl = resp;
        console.log(this.docDtl);
        if (this.docDtl) {
          let value = JSON.stringify(this.docDtl);
          let key = "LITMUS_USER_DETAILS";
          if(this.docDtl.resStatus === '1' || this.docDtl.resStatus === '3'){
            this.authenticationService.setAuthKey(key,value);
          }else if((this.docDtl.resStatus === '4')|| (this.docDtl.resStatus === '5')){
            let key2 = "APPLI_STATUS";
            let value2= JSON.stringify(this.docDtl);;
            this.authenticationService.setAuthKey(key2,value2); 
          }else{
            alert("invalid user mail or password");
          }
          this.validateLogin = !(this.authenticationService.isLoggedIn());
          if(this.docDtl.resStatus === '1'){
            this.router.navigate(['/', 'dashboard']);
          }else if(this.docDtl.resStatus === '3'){
            this.router.navigate([ 'dashboard/profile-settings']);
          }
        if((this.docDtl.resStatus === '4')|| (this.docDtl.resStatus === '5')){
            this.router.navigate(['/', 'applicationStatus']);
          }
        }else{
          alert('Error while login (Error in api call)')
        }
      });

    // login(userInput: Doclogindtl ): string{
    //   this.getLitmusUserLogindTL(userInput).subscribe(res=>{
    //     this.litmusUserLoginDtl=res;
    //     console.log(this.litmusUserLoginDtl);
    //   });
    //   if(this.litmusUserLoginDtl){
    //     console.log('enter if statement after===>');
    //     let value = JSON.stringify(this.litmusUserLoginDtl);
    //     let key = "LITMUS_USER_DETAILS";
    //       if(this.litmusUserLoginDtl.resStatus === '1'){
    //         this.returnMsg="successful";
    //         this.authenticationService.setAuthKey(key,value);
    //         this.router.navigate(['/', 'dashboard']);
    //        }else if(this.litmusUserLoginDtl.resStatus === '3'){
    //         this.returnMsg="successful";
    //         this.authenticationService.setAuthKey(key,value);
    //         this.router.navigate([ 'dashboard/profile-settings']);
    //       }else{
    //         this.returnMsg=this.litmusUserLoginDtl.resMsg;
    //       }
    //     }else{
    //       this.returnMsg = "Error in api call";
    //   }

    //   return this.returnMsg;
    //  }

    }

    changePass(id: string){
      this.dialogOpenService.open(id);
    }
    closeModal(id:string){
      this.dialogOpenService.close(id);
    }
      
    sendOtp(){
      // verify register emailid
      
      //send otp to register emailid
      alert('otp send to register emailid:'+ this.emailForPassChange);
      this.checkerOTP=true;
    }

    changePassword(){
        // check newPassword === reenter password 
        //if not equal show error
        //else change password and show successfull message
        alert('password successfully update');
        this.dialogOpenService.close('forgotPassDlg');
    }

    verifyOTP(){
      // verify send otp 
      //if false then show wrong otp
      //else 
      this.verifyOTPValue= true;
    }

}
