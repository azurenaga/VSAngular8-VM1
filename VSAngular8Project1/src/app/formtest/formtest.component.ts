import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})

export class FormtestComponent implements OnInit {
  requiredForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm();
 }
 myForm() {
  this.requiredForm = this.fb.group({
  name: ['', Validators.required ],
  email: ['', [Validators.required, 
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
  });
}
  userName1: any;
   formdata: any;
   ngOnInit() { 
      this.formdata = new FormGroup({ 
         userName1: new FormControl("")
      }); 
   } 
   onClickSubmit1(data: { userName1: any; }) {
    this.userName1 = data.userName1;
    console.log("You have get data : " + data.userName1);
  }
  onClickSubmit(result: { username: string; }) {
     console.log("You have entered : " + result.username); 
  }
}
