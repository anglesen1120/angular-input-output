import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'input-share',
  templateUrl: './input-share.component.html',
  styleUrls: ['./input-share.component.css']
})
export class InputShareComponent implements OnInit {
@Input () value : any;
@Output () sendValue  = new EventEmitter<string>();
// mesengerSend : string = 'Hello Parent';

  constructor() { }

  ngOnInit() {
   console.log('rest',this.value)
    
  }
  submitvalue (messenger){
    this.sendValue.emit(messenger) ;
    console.log('value',messenger);
    

  }

}