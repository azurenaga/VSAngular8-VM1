import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clscomp',
  templateUrl: './clscomp.component.html',
  styleUrls: ['./clscomp.component.css']
})
export class ClscompComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @Input() userName: string = ""; 
  @Input() name: string = 'Peter';
  presentDate = new Date();
  price : number = 20000;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 
  decimalNum1: number = 8.7589623; 
   decimalNum2: number = 5.43; 
}
