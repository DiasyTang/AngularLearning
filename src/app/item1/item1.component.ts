import { Component, OnInit } from '@angular/core';
const OPERATIONS:string[]=[
  "One","Two","Three"
];
@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

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
