import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayUserData'
})
export class DisplayUserDataPipe implements PipeTransform {
  errMsg = ' не указан';

  transform(value: string, target: string): string {
    if (!value) {
       return target + this.errMsg;
    }
    return value;
  }

}
