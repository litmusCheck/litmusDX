import { Injectable } from '@angular/core';
const TOKEN = 'TOKEN';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  setToken(token: string, lname: string): void {
    if('1'===token){
      localStorage.setItem(TOKEN, lname);
      alert('settoken docDtl');
    }
    else{
      localStorage.setItem(TOKEN, "false");
      alert('settoken false');
    }
    
  }

  isLogged() {
    if((localStorage.getItem(TOKEN) === 'false')){
      return false;
    }else{
      return (localStorage.getItem(TOKEN) !== null)
    }
  }
}






  
  

