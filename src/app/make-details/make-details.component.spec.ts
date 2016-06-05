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
import { MakeDetailsComponent } from './make-details.component';
import { Router } from '@angular/router';

describe('Component: MakeDetails', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MakeDetailsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

});

@Component({
  selector: 'test',
  template: `
    <app-make-details></app-make-details>
  `,
  directives: [MakeDetailsComponent]
})
class MakeDetailsComponentTestController {
}
