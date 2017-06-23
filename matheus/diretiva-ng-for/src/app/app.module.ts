import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgFor2Component } from './diretiva-ng-for2/diretiva-ng-for2.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgForComponent,
    DiretivaNgFor2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
