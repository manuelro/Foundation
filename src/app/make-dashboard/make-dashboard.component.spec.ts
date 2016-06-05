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
import { MakeDashboardComponent } from './make-dashboard.component';

describe('Component: MakeDashboard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MakeDashboardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MakeDashboardComponent],
      (component: MakeDashboardComponent) => {
    expect(component).toBeTruthy();
  }));

});

@Component({
  selector: 'test',
  template: `
    <app-make-dashboard></app-make-dashboard>
  `,
  directives: [MakeDashboardComponent]
})
class MakeDashboardComponentTestController {
}
