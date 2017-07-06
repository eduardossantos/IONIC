import { CursoService } from './../curso-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trabalhando-com-servico',
  templateUrl: './trabalhando-com-servico.component.html',
  styleUrls: ['./trabalhando-com-servico.component.css']
})
export class TrabalhandoComServicoComponent implements OnInit {
  
  cursos: string[];
  cursosService: CursoService;

  constructor(private _cursosService: CursoService) { 
    this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
