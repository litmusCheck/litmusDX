import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LitUserMasterDto } from '../model/lit-user-master-dto';
import { Observable } from 'rxjs';
import { QueuePatientDtlDto } from '../model/queue-patient-dtl-dto';

@Injectable({
  providedIn: 'root'
})
export class PatientQueueManageService {
  constructor(
    private http: HttpClient,
  ) { }
  getPatientList():Observable<QueuePatientDtlDto[]>{
    console.log("service called")
    let reqDto= new LitUserMasterDto(); 
    let headers:HttpHeaders  = new HttpHeaders();
    let sessionObj= JSON.parse(localStorage.getItem("LITMUS_USER_DETAILS"));
    reqDto.setDocId(String(sessionObj['doctorId']));
    let sessionId = String(sessionObj['sessionId']);
    headers = headers.append('sessionId', sessionId);
    //console.log("headers===>"+JSON.stringify(headers));
    
    //take docId and sessionId
     return this.http.post<QueuePatientDtlDto[]>("https://medikate.org/glclapitest/patientlist", reqDto,{headers});
     let list : QueuePatientDtlDto[]=[];
    //return list;
  }

  
}
