import { BuscaTipoService } from './cadastro/busca-tipo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    httpModule
  ],
  declarations: [CadastroComponent],
  exports: [CadastroComponent]
})
export class CadastroUsuarioModule { }
