import { Component, OnInit } from '@angular/core';
import { CursoService } from './../curso-service.service';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursoService) {
    

   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
