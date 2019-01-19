import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doclogindtl } from '../model/doclogindtl';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LitmusUserLoginDtl } from '../model/litmus-user-login-dtl';


@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {
  
  private litmusUserLoginDtl:User;
  private returnMsg: string;

  constructor(
      private http: HttpClient,
      private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private router: Router, 
    ) { 
      this.litmusUserLoginDtl = new User();
    }

  getLitmusUserLogindTL(userInput: Doclogindtl):Observable<User>{
    return this.http.post<User>("https://medikate.org/glclapitest/login/doc", userInput);
  }


}