import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDto } from '../model/response-dto';
import { DocActivityRequestDto } from '../model/doc-activity-request-dto';
import { DocDashboardDto } from '../model/doc-dashboard-dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
    ) {

   }

  check(){
    //console.log(obj)
    alert('dashboard called');
  }

  putUserLogout(): Observable<ResponseDto> {
    let userDtl = JSON.parse(localStorage.getItem("LITMUS_USER_DETAILS"));
    let reqDto = new DocActivityRequestDto();
    reqDto.setDoctorId(String(userDtl['doctorId']));
    reqDto.setSessionId(String(userDtl['sessionId']));
    reqDto.setUserCustomerId(String(userDtl['userCustomerId']));
    reqDto.setLoginMode("W");
    reqDto.setLogoutBy("User");
    return this.http.put<ResponseDto>("https://medikate.org/glclapitest/login/doclogout", reqDto);
  }

  getDashboardData(): DocDashboardDto {
    let dto = new DocDashboardDto();
    dto.setPatientQueueCount("15");
    dto.setEcgReportCount("2");
    dto.setPatientQueryCount("25");
    dto.setPrescriptionForReviewCount("10");
    dto.setReviewedPrescriptionCount("30");
    dto.setDocEarningAmount("35.2k");
    dto.setDoneConsultation("58");
    dto.setNewPostCount("23");
    return dto;
    //return this.http.get<DocDashboardDto>("https://medikate.org/glclapitest/docDashboard/doctorDashData");
  }

}
