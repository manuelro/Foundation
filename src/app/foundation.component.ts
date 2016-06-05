/**
 * Router module, or shell module
 * This module is in charge of setting up routing
 * for the entire application
 */
import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MakeService } from './make.service';
import { MakeListComponent } from './make-list/make-list.component';
import { MakeDashboardComponent } from './make-dashboard/make-dashboard.component';
import { MakeDetailsComponent } from './make-details/make-details.component';
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'foundation-app',
  templateUrl: 'foundation.component.html',
  styleUrls: ['foundation.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MakeService, ROUTER_PROVIDERS]
})

@Routes([
  {
    path: '/',
    component: MakeDashboardComponent
  },
  {
    path: '/make/:niceName',
    component: MakeDetailsComponent
  }
])

/**
 * The main app module
 */
export class FoundationAppComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(){}
}
