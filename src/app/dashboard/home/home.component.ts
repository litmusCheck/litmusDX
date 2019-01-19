import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from 'src/app/_service/dashboard.service';
import { ResponseDto } from 'src/app/model/response-dto';
import { DocDashboardDto } from 'src/app/model/doc-dashboard-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  docLName: string;
  response: ResponseDto;
  userloginstatus: string;
  private docDashData: DocDashboardDto;
  private strValue = "test test test";

  constructor(
    private router: Router,
    private http: HttpClient,
    private dashservice: DashboardService,
    ) {
      let myDtl: any; 
      myDtl = JSON.parse(localStorage.getItem('LITMUS_USER_DETAILS'));
      this.docLName = String(myDtl['doctorId']);
      console.log("home page doctor id: "+this.docLName);
      this.getDashboardData();
    }

   ngOnInit(){

      //update patient list
      
       setInterval(() => {
        this.getDashboardData(); },20*1000); 
      
    }
    testfun(){
      //if new patient in queue
      alert('patient in queue');
      //refresh the page--
    }

    getDashboardData(){
      console.log("getDashboardData called");
      this.docDashData = new DocDashboardDto();
      this.docDashData = this.dashservice.getDashboardData()/* subscribe(res=>{
        this.docDashData = res;
      },error=>{
        console.log("Error: "+ error);
      }); */
      console.log("test===>"+this.docDashData);
      console.log("test2===>"+JSON.stringify(this.docDashData));
    }

    logout(){
      alert('logout called');
      let myDtl: any; 
      myDtl = JSON.parse(localStorage.getItem('LITMUS_USER_DETAILS'));
       //console.log(myDtl);
      this.docLName = String(myDtl['doctorId']);
      //console.log("home page doctor id: "+this.docLName);
       this.dashservice.putUserLogout().subscribe(res=>{
            let responseDto: any;
            responseDto = res;
            if(responseDto['returnValue'] ==='1'){
              localStorage.removeItem('LITMUS_USER_DETAILS');
            this.router.navigate(['/', 'login']);
            }else{
              alert('Error while logout!! Try again ....');
            }
          },
          error=>{
            console.log("Error: "+error);
          });
          //console.log(window.location.href);
      }

    getToPatientQueue(){
      // this will route to patient queue page ===>
      this.router.navigate(['/', 'patientQueue']);
    }

}
