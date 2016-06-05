/**
 * The ModelList component
 * This component makes use of the ModelPreview component to
 * display a list with all the models for a certain car make
 */

import { Component, Input } from '@angular/core';
import { ModelPreviewComponent } from './../model-preview/model-preview.component';

@Component({
  moduleId: module.id,
  selector: 'model-list',
  templateUrl: 'model-list.component.html',
  styleUrls: ['model-list.component.css'],
  directives: [ModelPreviewComponent]
})
export class ModelListComponent {
  @Input() models: any[];
  constructor() {}
}
