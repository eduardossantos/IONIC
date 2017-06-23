import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: string[] = [];

  insertCurso(){
    this.cursos.push("a");

    console.log("cursos"); console.log(this.cursos);
  }

  title = 'app';
}
