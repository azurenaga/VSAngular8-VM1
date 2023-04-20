import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  studentarray:object = [
    {
    "first_name": "Caden",
    "city": "Reubenshire",
    "state": "New York",
    "postcode": "85562-3934"
    },
    {
    "first_name": "Gussie",
    "city": "Bergnaumland",
    "state": "Oklahoma",
    "postcode": "09698-6695"
    },
    {
    "first_name": "Suzanne",
    "city": "Horaceport",
    "state": "South Dakota",
    "postcode": "25188"
    }
  ];
}
