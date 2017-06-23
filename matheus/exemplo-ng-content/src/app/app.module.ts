import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { AmareloDirective } from './shared/fundo/amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HightlightMouseDirective } from './shared/hightlight-mouse.directive';
import { HightlightDirective } from './shared/hightlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgContentComponent,
    AmareloDirective,
    DiretivasCustomizadasComponent,
    HightlightMouseDirective,
    HightlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
