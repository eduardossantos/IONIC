import { TabelaModule } from './tabela/tabela.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroComponentPorLinhaDeComandoComponent } from './meu-primeiro-component-por-linha-de-comando/meu-primeiro-component-por-linha-de-comando.component';
import { CadastroComponent } from './cadastro-usuario/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroComponentPorLinhaDeComandoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    TabelaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


