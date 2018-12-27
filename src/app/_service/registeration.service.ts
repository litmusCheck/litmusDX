import { Injectable } from '@angular/core';
import { DocSpecilization } from '../model/doc-specilization';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Language } from '../model/language';
import { DocQualification } from '../model/doc-qualification';
import { DocPreRegDtl } from '../model/doc-pre-reg-dtl';
import { ResponseDto } from '../model/response-dto';
import { Constants } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
 
  constants:Constants;
  constructor(private http: HttpClient) {
    this.constants = new Constants();
   }
  getDocSpecilazion(): Observable<DocSpecilization[]> {
    var str: string= this.constants.serviceEndPoint +"/docspecilizations/available";
    //alert(str);
    return this.http.get<DocSpecilization[]>(str);
  }

  getLanguageList(): Observable<Language[]>   {
    return this.http.get<Language[]>("https://medikate.org/glclapitest/language");
  }

  getDocQualificationList(): Observable<DocQualification[]> {
    return this.http.get<DocQualification[]>("https://medikate.org/glclapitest/docqualifications");
  }

  sendOtp(strJson:DocPreRegDtl): Observable<DocPreRegDtl> {
    return this.http.post<DocPreRegDtl>("https://medikate.org/glclapitest/docregs/pre", strJson);
  }

  registerDoc(dto: any):  Observable<ResponseDto>{
    return this.http.post<ResponseDto>("https://medikate.org/glclapitest/docregs", dto);
  }
  
}
