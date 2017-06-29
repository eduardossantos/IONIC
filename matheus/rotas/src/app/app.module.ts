import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModalComponent } from './cursos/modal/modal.component';
import { MaterializeModule, MaterializeAction } from 'angular2-materialize';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoServiceService } from './cursos/curso-service.service';
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada/rota-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CursosComponent,
    ModalComponent,
    CursoDetalheComponent,
    RotaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing
  ],
  providers: [ CursoServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
