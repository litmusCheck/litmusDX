import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-singleele',
  templateUrl: './singleele.component.html',
  styleUrls: ['./singleele.component.css']
})
export class SingleeleComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() type: string;
  @Output() retunstr = new EventEmitter();
  
  constructor() { 
    
  }

  ngOnInit() {
  }
  retunstrfun(){
    let str ="welcome to angular";
    console.log('child component works');
    this.retunstr.emit(str);
  }
}
