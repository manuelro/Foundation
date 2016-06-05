/**
 * The MakeDetails component
 * This component generates the detail view
 * for any make
 */

import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { MakeService } from './../make.service';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { ModelListComponent } from './../model-list/model-list.component';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'make-details',
  templateUrl: 'make-details.component.html',
  styleUrls: ['make-details.component.css'],
  directives: [ModelListComponent, SidebarComponent, ROUTER_DIRECTIVES]
})
export class MakeDetailsComponent implements OnInit {
  make = {};

  constructor(
    private routeSegment: RouteSegment,
    private makeService: MakeService,
    private router: Router
  ){}

  ngOnInit() {
    this.getMake();
  }

  getMake(){
    let niceName = this.routeSegment.getParam('niceName');
    this.makeService.getMakeByNiceName(niceName)
      .subscribe(
        make => this.make = make,
        error => {
          console.log(<any>error);
          this.router.navigate( ['/'] );
        }
      );
  }

  goBack(){
    window.history.back();
  }

}
