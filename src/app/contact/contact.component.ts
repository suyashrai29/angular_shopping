import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 d: number;

  constructor() { }

  ngOnInit() {
   
  }
  submit(data){
   
   this.d= (data.num1*data.num2);
  }
  // profileform = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  // })
  // onSubmit(){
  //   console.table(this.profileform.value);
  // }


}
