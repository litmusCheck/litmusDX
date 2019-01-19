import { Injectable } from '@angular/core';
import { DoctorActivityDetailsDto } from '../model/doctor-activity-details-dto';
import { Constants } from '../model/constants';
import { Router } from '@angular/router';
import { ResponseDto } from '../model/response-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DocActivityRequestDto } from '../model/doc-activity-request-dto';

@Injectable({
  providedIn: 'root'
})
export class LiveHeaderService {
	private apiCons: Constants;
	private respoDto: ResponseDto; 

  constructor(
		private router: Router,
		private http: HttpClient,
	) {
		this.apiCons = new Constants();
		this.respoDto = new ResponseDto();
   }
  /*  addDocActivity(value: string): string {
     let docActivityDtlDto = new  DoctorActivityDetailsDto();
    let sessionObj = JSON.parse(localStorage.getItem('LITMUS_USER_DETAILS'));
    if(sessionObj){
			//session expires route back to login
			this.router.navigate(['/', 'dashboard']);
		}
		if("TAKE A BREAK"===value){
			docActivityDtlDto.setActivityId("ACT0003");
			docActivityDtlDto.setLoginMode("W");
			docActivityDtlDto.setLoginStatus("Y");
			docActivityDtlDto.setMedikateDoctorId(sessionObj['doctorId']);
			docActivityDtlDto.setSessionId(sessionObj['sessionId']);
			docActivityDtlDto.setUserCustomerId(sessionObj['userCustomerId']); //user customer id ===
			docActivityDtlDto.setMachineIpAddress("");
		}else{
			docActivityDtlDto.setActivityId("ACT0004");
			docActivityDtlDto.setLoginMode("W");
			docActivityDtlDto.setLoginStatus("Y");
			docActivityDtlDto.setMedikateDoctorId(sessionObj['doctorId']);
			docActivityDtlDto.setSessionId(sessionObj['sessionId']);
			docActivityDtlDto.setUserCustomerId(sessionObj['userCustomerId']); //user customer id ===
			docActivityDtlDto.setMachineIpAddress("");
		}
		
	}  */
	addActivityAPI(docActivityDtlDto: DoctorActivityDetailsDto):Observable<ResponseDto>{
		let apiEndpoint = this.apiCons.serviceEndPoint+'/docactivity/addActivity';
		return this.http.post<ResponseDto>(apiEndpoint, docActivityDtlDto);
	}
	getIpAdd(){
		console.log("getIpAdd called");
		return this.http.get("https://api.ipify.org?format=json");
	}
	sessionChecker(): string {
		let returnStr:string;
		let loginVO = JSON.parse(localStorage.getItem("LITMUS_USER_DETAILS"));
		if(loginVO === null || loginVO['userCustomerId'] === null){
			returnStr = "EXPIRED";
		} else {
			returnStr = "NOTEXPIRED";
		}
		return returnStr;
	}

	putDocInBreak(activityReqDto: DocActivityRequestDto): Observable<ResponseDto> {
		let apiEndpoint = this.apiCons.serviceEndPoint+"/login/doctakeabreak";
		return this.http.put<ResponseDto>(apiEndpoint, activityReqDto);
	 }

	 putDocOnline(activityReqDto: DocActivityRequestDto): Observable<ResponseDto> {
		let apiEndpoint = this.apiCons.serviceEndPoint+"/login/makemeonline";
		return this.http.put<ResponseDto>(apiEndpoint, activityReqDto);
	  }
}

