import { Component, OnInit } from '@angular/core';
import { LiveHeaderService } from 'src/app/_service/live-header.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {publicIp} from 'public-ip';
import { ResponseDto } from 'src/app/model/response-dto';
import { Router } from '@angular/router';
import { DoctorActivityDetailsDto } from 'src/app/model/doctor-activity-details-dto';
import { DocActivityRequestDto } from 'src/app/model/doc-activity-request-dto';
@Component({
  selector: 'app-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent implements OnInit {

    number: number = 3;
    name: string ="test";
    docStatusVal="TAKE A BREAK";
    showIpdiv = false;
    ipButtonVal = "Show My IP";
    ipAdd: any;
    publicIpAddr:string;
    private respoDto: ResponseDto;
    intervalVar: any;
    
  constructor(
    private headerService: LiveHeaderService,
    private http:HttpClient,
    private router: Router,
  ) {
    this.respoDto = new ResponseDto();
    //alert('constructor callled');
    this.intervalVar=setInterval(()=>{
      this.checkSessionExpiry();
      },3*60*1000);
    }

  ngOnInit() {
    //alert('ngOnInit callled');
    //checkpatient time function called on start of component===>
    this.checkPatientTime();
  }


  checkSessionExpiry(){
    //this fun is called in every 3 min to check is session is alive or not

    console.log("checkSessionExpiry called ==>")
    let returnMsg = this.headerService.sessionChecker();
    if(returnMsg==="EXPIRED"){
      //session expires route back to login
      console.log("session expires");
      this.stopIntervalLoop();
			this.router.navigate(['/', 'dashboard']);
    }
    //alert('check session');
  }
  stopIntervalLoop(){
    // clear the interval so that loop can stop running on next page===>
    clearInterval(this.intervalVar);
  }

  // put doctor online or in a break when toggle --->
  setOnlineOffline(){
    this.checkPatientTime();
    let activityReqDto = new DocActivityRequestDto();
    let sessionObj = JSON.parse(localStorage.getItem('LITMUS_USER_DETAILS'));
    if(!sessionObj && sessionObj ==null){
      //session expires route back to login
      console.log("session expires");
			this.router.navigate(['/', 'dashboard']);
    }
    activityReqDto.setDoctorId(sessionObj['doctorId']);
    activityReqDto.setLoginMode("W");
    activityReqDto.setSessionId(sessionObj['sessionId']);
    activityReqDto.setUserCustomerId(sessionObj['userCustomerId']);
    activityReqDto.setLogoutBy("ChangeByUser");
    console.log(activityReqDto);
		if("TAKE A BREAK"===this.docStatusVal){
      this.headerService.putDocInBreak(activityReqDto).subscribe(res=>{
        this.respoDto = res;
        console.log(this.respoDto);
        if((this.respoDto.message==="Success") ||(this.respoDto.returnValue==="1")){
          this.docStatusVal="MAKE ME ONLINE";
          alert('set offline');
        }else{
          alert('Error try again later....')
        }
      },
      error=>{
        console.log("error:"+error);
      });
    }else{
      this.headerService.putDocOnline(activityReqDto).subscribe(res=>{
        this.respoDto = res;
        console.log(this.respoDto);
        if((this.respoDto.message==="Success") ||(this.respoDto.returnValue==="1")){
          this.docStatusVal="TAKE A BREAK";
          alert('set online');
        }else{
          alert('Error try again later....')
        }
      },
      error=>{
        console.log("error:"+error);
      });
		}
   
  }

  
  showMyIp(){
    this.showIpdiv = !this.showIpdiv;
    this.headerService.getIpAdd().subscribe(r=>{
    this.ipAdd = r['ip'];
    console.log(r);
    console.log("my ip address"+ this.ipAdd);
    },error=>{
      console.log("Error"+error);
    });
    
    if(this.ipButtonVal==="Show My IP")
      this.ipButtonVal = "hide address" ;
    else
      this.ipButtonVal = "Show My IP"
  }

  

  checkPatientTime(){
    console.log("checkPatientTime function called=====>");
  }
   
}
