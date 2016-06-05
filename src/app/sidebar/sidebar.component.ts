/**
 * The Sidebar component
 * This component makes use of the MakeList component
 * to display the functionality as the MakeList component
 */

import { Component } from '@angular/core';
import { MakeListComponent } from './../make-list/make-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [MakeListComponent]
})
export class SidebarComponent{
  constructor(){}
}
