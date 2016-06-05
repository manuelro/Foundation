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
import { MakePreviewComponent } from './make-preview.component';

describe('Component: MakePreview', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MakePreviewComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

});

@Component({
  selector: 'test',
  template: `
    <app-make-preview></app-make-preview>
  `,
  directives: [MakePreviewComponent]
})
class MakePreviewComponentTestController {
}
