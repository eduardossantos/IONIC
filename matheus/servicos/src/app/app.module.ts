import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrabalhandoComServicoComponent } from './trabalhando-com-servico/trabalhando-com-servico.component';

import { CursoService } from './curso-service.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabalhandoComServicoComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
