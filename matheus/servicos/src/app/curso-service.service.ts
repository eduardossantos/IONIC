import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { console.log("CursoService"); }

  getCursos(){
    return ["JavaScript", "Angular 4", "Ionic 4"];
  }

}
