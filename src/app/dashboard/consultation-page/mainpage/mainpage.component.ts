import { Component, OnInit } from '@angular/core';
import { PatientQueueManageService } from 'src/app/_service/patient-queue-manage.service';
import { QueuePatientDtlDto } from 'src/app/model/queue-patient-dtl-dto';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  private patientDtlDtoList: QueuePatientDtlDto[];
  constructor(
    private patientSearchService: PatientQueueManageService,
  ) { 
      this.patientDtlDtoList = [];
      this.populatPatientList();
  }

  ngOnInit() {
    setInterval(() => {
      //this.populatPatientList(); 
      this.populatPatientList();
      },60*1000); 
  }

  populatPatientList(){
    console.log("populatePatientList called ===>");
    this.patientSearchService.getPatientList().subscribe(res=>{
      this.patientDtlDtoList = res;
      console.log("list of patient: "+ JSON.stringify(this.patientDtlDtoList));
      //if(this.patientDtlDtoList.length===0){}
    },error=>{
      console.log("Error: "+error);
    });
    //console.log("list===>"+ list);
  } 

  getlistfun(){
    console.log("populate list called");
  }
  
}
