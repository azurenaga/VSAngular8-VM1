import { Component, OnInit } from '@angular/core';
import { EmployeeClass } from '../employee-class.model';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  userName : string = "";
  pageHeader: string = 'Student Details';
    FirstName: string = 'Anurag';
    LastName: string = 'Mohanty';
    Branch: string = 'CSE';
    Mobile: number = 9876543210;
    Gender: string = 'Female';
    Age: number = 22;
    Columnspan: number = 0;
    myColor: string = "red";
    employees: EmployeeClass[] = [
      new EmployeeClass(1, "john", "sedwik", 5000),
      new EmployeeClass(2, "Ram", "Kumar", 6000),
      new EmployeeClass(3, "Fran", "Andrew", 10000)
    ];
  // pageHeader: string = '';
  //   FirstName: string = '';
  //   LastName: string = '';
  //   Branch: string = '';
  //   Mobile: number = 0;
  //   Gender: string = '';
  //   Age: number = 0;
  constructor(){}
  ngOnInit(): void {
    this.userName = "Naga";
  }

}
