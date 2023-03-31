import { Component } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.css']
})
export class TestDirectiveComponent {

  isLogIn : boolean = true;
   isLogOut : boolean = false;
   list = [1,2,3,4,5];
   logInName = 'user'; 
}
