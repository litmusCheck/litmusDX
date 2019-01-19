/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertService } from 'src/app/_service/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'test-dash',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstn:string="firstName";
  lastn:string="lastName";
  gender:string="M";
  toDate:Date;
  formmatedate= new Date();
  today: number = Date.now();
  clock:any;
  time:string;
  public Myform: FormGroup;
  @ViewChild('gendersel')  genderselEl:ElementRef;
  @ViewChild('age') ageEl:ElementRef;
  @ViewChild('gmap') gmapElement: any;
  //map:any;
  geocoder:any;
  public items: Array<string>;

  constructor(private formBuilder: FormBuilder, private testservice: AlertService,){
    //map: google.maps.Map;
    this.toDate = new Date();
    this.items = ["item1", "item2", "item3"]
    this.Myform = formBuilder.group({
      firstName: ['firstname', Validators.required],
      lastName: ['lastname', Validators.required],
      age: ['', Validators.max(120)],  
      gender:['M',Validators.required],    
    });
    
    setInterval(()=>{
      this.setalert(),
      this.funclock()
      },1000);
      
  }

  ngOnInit() {
    /* 
    var mapProp = {
      center: new google.maps.LatLng(22.625182, 88.351544),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    */
    // alert("today Date:"+this.formmatedate);
    // this.InitializeMap();
  }

  // InitializeMap() {
  //   var latlng = new google.maps.LatLng(-34.397, 150.644);
  //   var myOptions =
  //   {
  //       zoom: 8,
  //       center: latlng,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       disableDefaultUI: true
  //   };
  //   this.map = new google.maps.Map(document.getElementById("map"), myOptions);
  //   }

  function(){
    this.testservice.putalert();
  }

  funclock(){
    //alert('clock time');
    this.toDate = new Date();
  }
  setalert(){
    //alert('lets go');
  }
  
  setalert2(){
    alert('rightnow');
  }
  
  // Button1_onclick() {
  //   this.FindLocaiton();
  // }

  // FindLocaiton() {
  //   this.geocoder = new google.maps.Geocoder();
  //   this.InitializeMap();

  //   var address = document.getElementById("addressinput").value;
  //   this.geocoder.geocode({ 'address': address }, function (results, status) {
  //       if (status == google.maps.GeocoderStatus.OK) {
  //           this.map.setCenter(results[0].geometry.location);
  //           var marker = new google.maps.Marker({
  //               map: map,
  //               position: results[0].geometry.location
  //           });
  //       }
  //       else {
  //           alert("Geocode was not successful for the following reason: " + status);
  //       }
  //   });
  //  }
   
  onSubmit() {
    //this.genderselEl.nativeElement.focus();
    alert('submit function called');
    console.log('submit function called');
  }
  showvalue(str){
    console.log(str);
  }

  public open(event, item) {
    alert('Open ' + item +'@@@@ ==>0');
  }

}