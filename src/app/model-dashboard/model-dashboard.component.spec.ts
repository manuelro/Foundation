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
import { ModelDashboardComponent } from './model-dashboard.component';

describe('Component: ModelDashboard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ModelDashboardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ModelDashboardComponent],
      (component: ModelDashboardComponent) => {
    expect(component).toBeTruthy();
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-model-dashboard></app-model-dashboard>
  `,
  directives: [ModelDashboardComponent]
})
class ModelDashboardComponentTestController {
}
