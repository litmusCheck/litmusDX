import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_service/alert.service';

@Component({
  selector: 'test-dash',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private testservice: AlertService,
  ) {
      // setInterval(()=>{
      //   this.setalert(); },2000
      // );
   }

  ngOnInit() {
  }
  function(){
    this.testservice.putalert();
  }

  setalert(){
    alert('lets go');
  }
  
  setalert2(){
    alert('rightnow');
  }
    
}
