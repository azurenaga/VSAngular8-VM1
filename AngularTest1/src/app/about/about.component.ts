import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private ts:TestService){

  }

  stdnt:any = this.ts.studentarray;
}
