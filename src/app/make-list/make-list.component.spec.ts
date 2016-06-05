import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MakeListComponent } from './make-list.component';

describe('Component: MakeList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MakeListComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

});

@Component({
  selector: 'test',
  template: `
    <app-make-list></app-make-list>
  `,
  directives: [MakeListComponent]
})
class MakeListComponentTestController {
}
