import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://globo.com";

  cursoAngular: boolean = true;

  urlImagem: string = 'http://lorempixel.com/400/200/nature';

  getCurtirCurso (){
    return true;
  }

  getValor(){
    return 1;
  }

  botaoClicado(){
    alert("Ricardo");
  }

  valorAtual: string = "";
  valorSalvo: string = ""

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  isMouseOver: boolean = false;

  oNmouseoverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
