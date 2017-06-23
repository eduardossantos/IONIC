import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaSwitchComponent } from './diretiva-switch/diretiva-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
