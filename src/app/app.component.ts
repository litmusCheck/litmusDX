import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages/module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'litmusDX';

  constructor(private flashMessage:FlashMessagesService){

  }
  
  ngOnInit(){
   
  }
  showMessages(){
    alert('funtion called');
    this.flashMessage.show('show successfull messages', { cssClass: 'alert-success', timeout: 2000 });
  }

}
