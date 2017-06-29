import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-data-number',
  templateUrl: './pipe-data-number.component.html',
  styleUrls: ['./pipe-data-number.component.css']
})
export class PipeDataNumberComponent implements OnInit {

  filtro: string = '';

  teste: any = {
    data: new Date(2017, 6, 29),
    numero: 4.5983923,
    moeda: 232.32
  }

  teste1: any = [{
    data: new Date(2017, 6, 29),
    numero: 4.5983923,
    moeda: 232.32,
    desc: 'Java'
  },
  {
    data: new Date(2017, 6, 29),
    numero: 1,
    moeda: 232.32,
    desc: 'JavaScript'
  },{
    data: new Date(2017, 6, 29),
    numero: 2,
    moeda: 232.32,
    desc: 'Outro'
  }]

  constructor() { }

  ngOnInit() {
  }

}
