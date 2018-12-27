import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent implements OnInit {

    number: Number = 3;
    name: String ="test";
    value: String="Online take a break"
    
  constructor() { }

  ngOnInit() {
  }

  OnandOffservice(){
    if(this.value ==="Online take a break"){
      //api(user login api docactivity/addactivity) call for changing status of doctor and on success
      this.value="make me online";
      alert('set offline');
    }else{
       //api(user login api docactivity/addactivity) call for changing status of doctor and on success
       this.value="Online take a break";
       alert('set online');
    }
  }
}
