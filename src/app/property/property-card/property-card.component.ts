import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  @Input() inputProperty:any//throgh this we can receive list of properties
  //passing data using Input directive
  
  ngOnInit(): void {
  }

}
