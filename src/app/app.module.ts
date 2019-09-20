import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonShareComponent } from './button-share/button-share.component';
import { InputShareComponent } from './input-share/input-share.component';
import { DropdownShareComponent } from './dropdown-share/dropdown-share.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ButtonShareComponent, InputShareComponent, DropdownShareComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
