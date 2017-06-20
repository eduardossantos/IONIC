import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgswitchDiretivaComponent } from './ngswitch-diretiva/ngswitch-diretiva.component';

@NgModule({
  declarations: [
    AppComponent,
    NgswitchDiretivaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
