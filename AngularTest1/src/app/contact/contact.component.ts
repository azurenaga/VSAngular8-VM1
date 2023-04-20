import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
  TestService


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  

  constructor(private ar:ActivatedRoute, private us:TestService){

  }
  ngOnInit(): void {
    
    
  }

}
