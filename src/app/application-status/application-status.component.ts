import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  docID:string;
  docappliStats:string;
  constructor() {
    let dto = JSON.parse(localStorage.getItem('APPLI_STATUS'));
    if(dto){
      this.docID = dto['doctorId'];
      this.docappliStats = dto['resStatus'];
    }
   }

  ngOnInit() {
  }

}
