import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-modelo',
  templateUrl: './template-modelo.component.html',
  styleUrls: ['./template-modelo.component.css']
})
export class TemplateModeloComponent implements OnInit {

  mostrarCursos: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
