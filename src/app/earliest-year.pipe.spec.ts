import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { EarliestYear } from './earliest-year.pipe';

describe('EarliestYear Pipe', () => {
  beforeEachProviders(() => [EarliestYear]);

  it('should transform the input', inject([EarliestYear], (pipe: EarliestYear) => {
      let input: number[] = [2015, 1940, 1970];
      let expected: number = input[1]; //1940
      let actual: number = pipe.transform(input);

      expect(actual).toEqual(expected);
  }));
});
