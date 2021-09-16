import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limitValue:number): string {
    if(!value) return null
    if(value.length< limitValue) return value;
    limitValue ? limitValue : 20
    return value.substring(0,limitValue) + "..."
  }

}
