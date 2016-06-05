import { Component, OnInit } from '@angular/core';
import { MakeListComponent } from './../make-list/make-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-make-dashboard',
  templateUrl: 'make-dashboard.component.html',
  styleUrls: ['make-dashboard.component.css'],
  directives: [MakeListComponent]
})
export class MakeDashboardComponent {
  constructor() {}
}
