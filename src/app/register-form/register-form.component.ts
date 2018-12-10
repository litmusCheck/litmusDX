import { Component, OnInit, ViewChild, ElementRef, Testability, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RegisterationService } from '../_service/registeration.service';
import { DocSpecilization } from '../model/doc-specilization';
import { Language } from '../model/language';
import { DocQualification } from '../model/doc-qualification';
import { HttpClient } from '@angular/common/http';
import { DocPreRegDtl } from '../model/doc-pre-reg-dtl';
import { ResponseDto } from '../model/response-dto';
import { Router } from '@angular/router';
import { AlertService } from '../_service/alert.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  reffralVals = ['Facebook','Media','Glocal Website'];
  registrationForm: FormGroup;
  docSpec: DocSpecilization;
  docSpecList: DocSpecilization [];
  languageList : Language[] = [];
  qualificationList: DocQualification[] = [];
  docPreReg:DocPreRegDtl;
  selectedDocPreReg:DocPreRegDtl;
  regresponse: ResponseDto;
  responseDto: ResponseDto;
  isDisabled = false;
  submitted = false;
  @ViewChild("mobNumber") nameField: ElementRef;
  
  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private registrationService: RegisterationService,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    private alertService: AlertService  
    ) { 
    this.docSpecList = [];
    this.selectedDocPreReg = new DocPreRegDtl();
    this.responseDto = new ResponseDto();
  }


  ngOnInit() {
    
    let selectedDocSpec = {};
    let bucketName = '';
    let seletedQuali :  string[] = [];
    let langIds: string[] = [];
    let bucketObjects = new FormArray([]);
    this.regresponse = new ResponseDto();
   // let num : number = 5;

    this.registrationForm = this.fb.group({
      seletedQualIds: ['',Validators.required], 
      selectedLangIds: ['',Validators.required], 
      selectedSpecId: ['',Validators.required], 
     // refferal: ['', Validators.required],
      docFirstName: ['', Validators.required],
      docLastName: ['', Validators.required],
      emailId: ['',[Validators.required, Validators.email]],
      expYears: ['',Validators.required],
      mobNumber: ['',Validators.required],
      txtotp: ['',Validators.required],
      countOtp:  [''],
      otpflag:  [''],
      mciNo:  ['',Validators.required],
      mciRegNo_md: [''],
      mciRegNo_dm: [''],
      certificate_dm: [''],
      certificate_md: [''],
      certificate: ['',Validators.required],
      docImg:['',Validators.required],
      signature: ['',Validators.required]
    });

    this.registrationService.getDocSpecilazion().subscribe(
      response =>{
        this.docSpecList = response
      });

    this.registrationService.getLanguageList().subscribe(
      response =>{
        this.languageList = response
       // console.log(this.languageList);
      });

    this.registrationService.getDocQualificationList().subscribe(
      Response =>{
        this.qualificationList = Response;
       // console.log(this.qualificationList);
      });

      // load js files in order else get error(jquery.deferred exception $(...).funName is not a function)
      
       this.loadScript3();
       this.loadScript();
  }
  get f() { return this.registrationForm.controls; }


  // add custom js file in xhtml 

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/customJs/custom.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
 
  loadScript3(){
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/customJs/jquery.mask_1.14.15.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  
 
  generateOTP(){
    var count;
	  if(this.registrationForm.controls['mobNumber'].value ===''){
      alert("Please enter your mobile no.!");
      this.nameField.nativeElement.focus();
      return ;
    }else if(this.registrationForm.controls['mobNumber'].value.length!==10){
      alert("Please enter a valid 10 digit mobile number.!");
      this.nameField.nativeElement.focus();
      return false;
    }
    
    if(this.registrationForm.controls['countOtp'].value==""){
      count = 0;
    }else{
      count = parseInt(this.registrationForm.controls['countOtp'].value);
    }
  
    this.registrationForm.controls['countOtp'].setValue(count+1);
    alert('otp sent');
    if(parseInt(count)<parseInt("2")){
      this.docPreReg = new DocPreRegDtl();
      this.docPreReg.countryCode = "+91";
      this.docPreReg.doctorName ="";
      this.docPreReg.litDocSpecalizeId=this.registrationForm.controls['selectedSpecId'].value;
      this.docPreReg.mobileNo =this.registrationForm.controls['mobNumber'].value;
      this.docPreReg.otp ="";
      this.docPreReg.smsSender ="";
      this.docPreReg.status = "";
      
        this.registrationService.sendOtp(this.docPreReg).subscribe(
        Response =>{
          console.log(Response);
          this.selectedDocPreReg=Response;
      });
     }else{
      this.isDisabled =true;
     } 
  }

  validateOTP(){
    var txtOTP = this.registrationForm.controls['txtotp'].value;
    if(txtOTP==""){
      alert("Please enter OTP!");
      return ;
    }
    if(this.selectedDocPreReg.otp!==txtOTP){
      alert("Invalid OTP!");
      this.registrationForm.controls['otpflag'].setValue("INVALID");
    }else if(this.selectedDocPreReg.otp==txtOTP){
      alert("OTP validation done successfully!");
      this.registrationForm.controls['otpflag'].setValue("VALID");
    }
  }

  ValidateEmail(){
    if(this.registrationForm.controls.emailId.errors){
      alert('enter a valid email id');
    }
  }

  onSubmit(){
    alert('submitted');
    this.submitted = true;

    //  All input fields Validation check and showing error messages ===> focus on first invalid element
    // if(this.registrationForm.controls.refferal.errors){
    //   alert("Please select refferal source!");
    //   return false;
    // }

    if(this.registrationForm.controls.docFirstName.errors){
      alert("Please enter first name!");
       return ;
    }

    if(this.registrationForm.controls.docLastName.errors){
      alert("Please enter last name!");
        return ;
    }
    if(this.registrationForm.controls.selectedSpecId.errors){
      alert("Please enter specialization!");
        return ;
    }
    if(this.registrationForm.controls.seletedQualIds.errors){
      alert("Please enter qualification!");
        return ;
    }
    if(this.registrationForm.controls.selectedLangIds.errors){
      alert("Please enter language!");
        return ;
    }
    if(this.registrationForm.controls.emailId.errors){
      if(this.registrationForm.controls.emailId.errors.required){
        alert("Please enter email!");
        return ;
      }else{
        alert("Please enter valid email!");
        return ;
      }
    }
    if(this.registrationForm.controls.expYears.errors){
      alert("Please enter experience!");
        return ;
    }
     
    if(this.registrationForm.controls.docImg.errors){
      alert("Please upload profile pic!");	
        return ;
    }
    if(this.registrationForm.controls.signature.errors){
      alert("Please upload Signature!");		
      return false;
    } 
    if(this.registrationForm.controls.mciNo.errors){
      alert("Please enter MCI registration no.!");		
      return false;
    } 
    if(this.registrationForm.controls.certificate.errors){
        alert("Please upload certificate!");		
        return false;
      } 

    if(this.registrationForm.controls['mciRegNo_md'].value !== ""){
        if(this.registrationForm.controls['certificate_md'].value ==""){
          alert("Please upload MD or equivalent certificate!");		
          return false;
        }
      }
    if(this.registrationForm.controls['mciRegNo_dm'].value !== ""){
      if(this.registrationForm.controls['certificate_dm'].value ==""){
        alert("Please upload DM or equivalent certificate!");	
        return false;
      }
    }
    if(this.registrationForm.controls.mobNumber.errors){
      alert("Please enter mobile no.!");
        return ;
    }
    if(this.registrationForm.controls['otpflag'].value !== "VALID"){
      alert("Please enter OTP!");
      return false;
    } 
    
      if(this.submitted){
      let strQuali : string = "";
      var i: number;
      let strArrayObj: string[] = [];
      strArrayObj = this.f.seletedQualIds.value;
      strQuali = strArrayObj[0];
      for(i=1; i<strArrayObj.length; i++)
        strQuali = strQuali+","+strArrayObj[i];
      //console.log(strQuali);

      let strLang : string = "";
      var i: number;
      let strArrayObj2: string[] = [];
      strArrayObj = this.f.selectedLangIds.value;
      strLang = strArrayObj[0];
      for(i=1; i<strArrayObj.length; i++)
       strLang = strLang+","+strArrayObj[i];
      //console.log(strLang);
    }
      
      let dto: any = {
          "accountFlag": "",
          "blockId": "",
          "countryId": "",
          "degreeCertificateImgFileData": this.registrationForm.controls.certificate.value,
          "degreeCertificateImgFileName": "mbbs.jpg",
          "districtId": "",
          "dmCertificateImgFileData": this.f.certificate_dm.value,
          "dmCertificateImgFileName": "dm.jpg",
          "docId": "",
          "docSignImgFileData": this.f.signature.value,
          "docSignImgFileName": "sign.jpg",
          "expYr": this.f.expYears.value,
          "languageIds": "",
          "litDocSpecalizeId":  this.f.selectedSpecId.value,
          "logInTyp": "",
          "machineIpaddress": "",
          "mdCertificateImgFileData": this.f.certificate_dm.value,
          "mdCertificateImgFileName": "md.jpg",
          "pinCode": "",
          "productId": "",
          "profileImgFileData":  this.f.docImg.value,
          "profileImgFileName": "docImg.jpg",
          "referralSourceId": "RDI0002",
          "stateId": "",
          "subProductId": "",
          "userCustomerId": "",
          "userDate": "",
          "userDmRegnId": this.f.mciRegNo_dm.value,
          "userFname": this.f.docFirstName.value,
          "userLname": this.f.docLastName.value,
          "userMailId": this.f.emailId.value,
          "userMdRegnId": this.f.mciRegNo_md.value,
          "userMname": "",
          "userMobileNo": this.f.mobNumber.value,
          "userQualification": "",
          "userRegnId": this.f.mciNo.value,
          "userTime": "",
          "userTitle": "Dr.",
          "userType": "",
          "useravilableFlag": ""
       }
      
      
      this.registrationService.registerDoc(dto).subscribe(
        res=>{
          this.responseDto = res;
          if(this.responseDto.returnValue=="0"){
            alert("There is some error. Please try again");
          }else if(this.responseDto.returnValue==="2"){
            alert("This email id is alredy registered!");
          }else if(this.responseDto.returnValue==="1"){		    				  
            alert('Successfully register Your docId is: '+this.responseDto.message);
           //this.alertService.success(this.regresponse.message, true);
            //this.router.navigate(['/','login']);
          }
        },
        error=>{
            alert('something went wrong');
        });
        
         
        

    // console.log('langids'+this.registrationForm.controls['selectedLangIds'].value + '  ##qualificationids'+this.registrationForm.controls['seletedQualIds'].value +' @@@'+strJson);
  
    // const result: any = Object.assign({}, this.registrationForm.value);
    // result.selectedDocSpec = Object.assign({}, result.selectedDocSpec);
    // console.log(result);

    //this.registrationService.registerDoc(strJson)
   }

   signUpload(event){
     //console.log(event);
     const reader = new FileReader();
 
     if(event.target.files && event.target.files.length) {
       //console.log(event.target.files && event.target.files.length);
       const [file] = event.target.files;
       reader.readAsDataURL(file);
   
       reader.onload = () => {
        let test = String(reader.result);
         this.registrationForm.patchValue({
          signature:  test.split(",")[1]
        });
       
         // need to run CD since file load runs outside of zone
         this.cd.markForCheck();
       };
     }
   }
      
   profilePicUpload(event){
   // console.log(event);
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      //console.log(event.target.files && event.target.files.length);
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        let test = String(reader.result);
        this.registrationForm.patchValue({
          docImg: test.split(",")[1]
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  certificateUpload(event){
    //console.log(event);
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      //console.log(event.target.files && event.target.files.length);
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        let test = String(reader.result);
        this.registrationForm.patchValue({
          certificate:  test.split(",")[1]
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  certificateDmUpload(event){
    //console.log(event);
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      //console.log(event.target.files && event.target.files.length);
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        let test = String(reader.result);
        this.registrationForm.patchValue({
          certificate_dm:  test.split(",")[1]
       });
       // need to run CD since file load runs outside of zone
       this.cd.markForCheck();
      };
    }
  }
       certificatemdUpload(event){
       // console.log(event);
        const reader = new FileReader();
        if(event.target.files && event.target.files.length) {
         // console.log(event.target.files && event.target.files.length);
          const [file] = event.target.files;
          reader.readAsDataURL(file);
      
          reader.onload = () => {
            let test = String(reader.result);
            this.registrationForm.patchValue({
              certificate_md:  test.split(",")[1]
           });
      
        // need to run CD since file load runs outside of zone
          this.cd.markForCheck();
          };
        }
      }
}