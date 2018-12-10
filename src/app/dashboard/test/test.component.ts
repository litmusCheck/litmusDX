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
  ) { }

  ngOnInit() {
  }
  function(){
    this.testservice.putalert();
  }
}
