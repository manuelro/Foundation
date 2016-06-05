/**
 * EarliestYear pipe
 * Use this pipe to get the earlier year from
 * an array of years
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'earliestYear'
})
export class EarliestYear implements PipeTransform {

  transform(value: number[], args?: string): number {
    value = value || [];
    let earliestYear: number;

    value.map(
      (year) =>
        earliestYear = !earliestYear ? year : year <= earliestYear ? year : earliestYear
    );

    return earliestYear;
  }

}
