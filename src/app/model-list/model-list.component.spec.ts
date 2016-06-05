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
import { ModelListComponent } from './model-list.component';

describe('Component: ModelList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ModelListComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ModelListComponent],
      (component: ModelListComponent) => {
    expect(component).toBeTruthy();
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-model-list></app-model-list>
  `,
  directives: [ModelListComponent]
})
class ModelListComponentTestController {
}
