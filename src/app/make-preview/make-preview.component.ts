/**
 * The MakePreview component
 * This component contains the visual structure
 * to generate a make preview
 */

import { Component, Input } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'make-preview',
  templateUrl: 'make-preview.component.html',
  styleUrls: ['make-preview.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MakePreviewComponent {
  @Input() make;
  constructor(private router: Router) {}
}
