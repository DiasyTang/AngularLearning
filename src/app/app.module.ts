import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Item1Component } from './item1/item1.component';
import { AppRoutingModule } from './/app-routing.module';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    Item2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
