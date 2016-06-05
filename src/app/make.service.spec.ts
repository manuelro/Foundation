import {
  beforeEachProviders,
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {provide} from '@angular/core';
import { MakeService } from './make.service';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('Make Service', () => {
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    MakeService,
    provide(Http, {
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) =>
        new Http(backend, defaultOptions),
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  beforeEach(inject([MockBackend], (backend:  MockBackend) => {
      let responseMockData = { body: { makes: [ { name: 'Foo' }, { name: 'Bar' } ] } };
      let resposeOptions = new ResponseOptions(responseMockData);
      const baseResponse = new Response(resposeOptions);
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
  }));

  it('should ...',
    inject([MakeService], (service: MakeService) => {
      service.getMakes().subscribe(
        (response: Response) => {
          let expected: any[] = [ { name: 'Foo' }, { name: 'Bar' } ];
          let actual = response;

          expect(actual).toEqual(expected);
        }
      );
    }
  ));

});
