import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doclogindtl } from '../model/doclogindtl';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {
  
  constructor(private http: HttpClient) { }

  login(userInput: Doclogindtl ): Observable<User>{
    return this.http.post<User>("https://medikate.org/glclapitest/login/doc", userInput
     );
  }
}