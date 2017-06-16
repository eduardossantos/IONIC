import { Injectable } from '@angular/core';

@Injectable()
export class BuscaTipoService {

  constructor() { }

  getBuscaTipo() {
    // return this.http.get('url')
    //   .map((response: Response) => response.json());'

    return ['Vendedor', 'Fabricante'];
  }

}
