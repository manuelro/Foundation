import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { MakeFilter } from './make-filter.pipe';

describe('MakeFilter Pipe', () => {
  beforeEachProviders(() => [MakeFilter]);

  it('should transform the input', inject([MakeFilter], (pipe: MakeFilter) => {
      let input: any[] = [{name: 'foo'}, {name: 'bar'}];
      let expected = [input[0]];
      let actual = pipe.transform(input, input[0].name);

      expect(actual).toEqual(expected);
  }));
});
