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
    
    this.loginService.login(
      this.userInput
    ).subscribe(
        r => {
          this.docDtl = r;
          if (null !== r.resStatus) {
            this.authenticationService.setToken(r.resStatus, JSON.stringify(this.docDtl));
            this.validateLogin = !(this.authenticationService.isLogged());
            this.router.navigate(['/', 'dashboard']);
            this.flashMessage.show('show successfull messages', { cssClass: 'alert-success', timeout: 2000 });
            console.log(this.docDtl);
          }
        },
        r => {
          alert('Error while login:');
        });

    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
           
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
