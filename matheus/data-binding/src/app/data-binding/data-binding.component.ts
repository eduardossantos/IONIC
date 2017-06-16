import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://omatheuslima.com.br';

  conteudoAtual: any = '';
  conteudoSalvo: any = '';

  constructor() { }
  
  OnkeyPress (evento){
    this.conteudoAtual = evento;
  }

  SalvandoConteudo(texto){
    this.conteudoSalvo = texto;
  }

  ngOnInit() {
  }

}
