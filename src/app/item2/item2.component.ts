import { Component, OnInit } from '@angular/core';
const OPERATIONS:string[]=[
  "Apple","Orange","Pear"
];
@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

  operations:string[];
  selectedoperation:string;

  constructor() { }

  ngOnInit() {
    this.getOperations();
  }

  getOperations():void{
    this.operations=OPERATIONS;
  }

  onSelect(operation:string):void{
    this.selectedoperation=operation;
  }
}
