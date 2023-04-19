import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  properties:Array<any>=[
    {
      "Id":1,
      "Name":"Tata House",
      "Type":"Villa",
      "Price":120000
    },
    {
      "Id":2,
      "Name":"Birla House",
      "Type":"Flat",
      "Price":150000
    },
    {
      "Id":3,
      "Name":"Ambani House",
      "Type":"Villa",
      "Price":160000
    },
    {
      "Id":4,
      "Name":"Adani House",
      "Type":"House",
      "Price":120000
    },
    {
      "Id":5,
      "Name":"Prabhas House",
      "Type":"Villa",
      "Price":150000
    },
    {
      "Id":6,
      "Name":"Moni House",
      "Type":"Flat",
      "Price":160000
    }
  
  ]

  ngOnInit(): void {
  }

}
