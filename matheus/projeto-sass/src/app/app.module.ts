import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestandoNovoComponenteComponent } from './testando-novo-componente/testando-novo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    TestandoNovoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
