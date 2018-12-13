import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  docLName: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    ) {
        let myDtl: any; 
        //console.log(localStorage.getItem('TOKEN'));
        myDtl = JSON.parse(localStorage.getItem('TOKEN'));
        //console.log(myDtl);
        this.docLName = String(myDtl['doctorId']);
   }

   ngOnInit(){}

    logout(){
      alert('logout called');
      let myDtl: any; 
      //console.log(localStorage.getItem('TOKEN'));
      myDtl = JSON.parse(localStorage.getItem('TOKEN'));
      //console.log(myDtl);
      this.docLName = String(myDtl['doctorId']);
      this.http.put("https://medikate.org/glclapitest/login/doclogout", 
        {
          "doctorId": String(myDtl['doctorId']),
          "loginMode": "",
          "logoutBy": "",
          "sessionId": "",
          "userCustomerId": ""
        }).subscribe(
          res=>{
            let responseDto: any;
            responseDto = res;
            if(responseDto['returnValue'] ==='1'){
              localStorage.removeItem('TOKEN');
            this.router.navigate(['/', 'login']);
            }else{
              alert('Error while logout');
            }
          });
          console.log(window.location.href);
          window.open('http://www.google.com');
    }
}
