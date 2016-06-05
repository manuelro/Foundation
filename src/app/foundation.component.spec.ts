import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FoundationAppComponent } from '../app/foundation.component';

beforeEachProviders(() => [FoundationAppComponent]);

describe('App: Foundation', () => {
  // it('should create the app',
  //     inject([FoundationAppComponent], (app: FoundationAppComponent) => {
  //   // expect(app).toBeTruthy();
  // }));
  //
  // it('should have as title \'foundation works!\'',
  //     inject([FoundationAppComponent], (app: FoundationAppComponent) => {
  //   // expect(app.title).toEqual('foundation works!');
  // }));
});
