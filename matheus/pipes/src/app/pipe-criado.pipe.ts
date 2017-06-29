import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCriado',
  pure: false
})
export class PipeCriadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length == 0 || args === undefined){
      return value;
    }
    let filtro = args;
    return value.filter(
      v => v.desc.indexOf(filtro) != -1
    );
  }

}
