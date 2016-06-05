import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';
import { Router, Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';

describe('Component: Sidebar', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SidebarComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SidebarComponent],
      (component: SidebarComponent) => {
        expect(component).toBeTruthy();
      }
  ));

});

@Component({
  selector: 'test',
  template: `
    <app-sidebar></app-sidebar>
  `,
  directives: [SidebarComponent]
})
class SidebarComponentTestController {
}
