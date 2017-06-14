import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemComponent } from './../listagem/listagem.component';
import { BuscaComponent } from './../busca/busca.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListagemComponent,
    BuscaComponent
  ],
  exports: [
    ListagemComponent,
    BuscaComponent
  ]
})
export class TabelaModule { }
