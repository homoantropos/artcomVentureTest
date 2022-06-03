import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullCheck'
})
export class NullCheckPipe implements PipeTransform {

  transform(value: string): string {
    if(value === null) {
      return "it's unknown"
    }
    return value;
  }

}
