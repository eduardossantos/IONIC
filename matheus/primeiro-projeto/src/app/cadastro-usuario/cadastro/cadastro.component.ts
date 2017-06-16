import { BuscaTipoService } from './busca-tipo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [BuscaTipoService]
})
export class CadastroComponent implements OnInit {

  tipos: string[];

  constructor(private BuscaTipoService: BuscaTipoService) { 

    console.log("entrou");

    this.tipos = this.BuscaTipoService.getBuscaTipo();

  }

  ngOnInit() {
  }

}
