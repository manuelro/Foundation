/**
 * The makeFilter pipe
 * This pipe filters the makes array based on its name
 * Use: <element *ngFor="make of makes | makeFilter:<makeName>"></element>
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeFilter'
})
export class MakeFilter implements PipeTransform {

  transform(value: any[], args?: string): any[] {
    let result: any[] = value || [];
    let reg = new RegExp(args, 'gim');
    result = value.length ? value.filter((item) => item.name.match(reg) ? item : null) : result;
    return result;
  }

}
