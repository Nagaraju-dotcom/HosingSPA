import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  
  @Input() inputProperty: IProperty;//throgh this we can receive list of properties
  //passing data using Input directive from parent to child
    constructor() { 
    }

 
  
  ngOnInit(): void {
  }

}
