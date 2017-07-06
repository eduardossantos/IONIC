import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

import { CursoServiceService } from './curso-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursoService: CursoServiceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) =>
       this.pagina = queryParams['pagina']
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
