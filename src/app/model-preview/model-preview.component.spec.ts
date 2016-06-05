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
import { ModelPreviewComponent } from './model-preview.component';

describe('Component: ModelPreview', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ModelPreviewComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ModelPreviewComponent],
      (component: ModelPreviewComponent) => {
    expect(component).toBeTruthy();
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-model-preview></app-model-preview>
  `,
  directives: [ModelPreviewComponent]
})
class ModelPreviewComponentTestController {
}
