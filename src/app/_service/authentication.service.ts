import { Injectable } from '@angular/core';
const TOKEN = '';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  setAuthKey(key: string, value: string):void {
    localStorage.setItem(key, value);
   // console.log("@@@@@key:"+key+"    ####value:"+value);
  }

  isLoggedIn() {
      // console.log("TEST TEST LOOK FOR KEY::");
      // console.log(localStorage.getItem("LITMUS_USER_DETAILS") !== null);
      return (localStorage.getItem("LITMUS_USER_DETAILS") !== null);
  }
  
}






  
  

