import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import {Item1Component} from './item1/item1.component';
import{Item2Component} from './item2/item2.component';

const routes:Routes=[
  {path:'',redirectTo:"/item1",pathMatch:'full'},
  {path:'item1',component:Item1Component},
  {path:'item2',component:Item2Component},
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
