import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipeDataNumberComponent } from './pipe-data-number/pipe-data-number.component';
import { PipeCriadoPipe } from './pipe-criado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipeDataNumberComponent,
    PipeCriadoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
