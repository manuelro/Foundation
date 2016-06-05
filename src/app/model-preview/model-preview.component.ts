/**
 * The ModelPreview component
 * This component contains all the visual structure to
 * preview a make model
 */

import { Component, OnInit, Input } from '@angular/core';
import { EarliestYear } from './../earliest-year.pipe';

@Component({
  moduleId: module.id,
  selector: 'model-preview',
  templateUrl: 'model-preview.component.html',
  styleUrls: ['model-preview.component.css'],
  pipes: [EarliestYear]
})
export class ModelPreviewComponent implements OnInit {
  @Input() model;
  earliestYear: number;

  constructor() {}

  ngOnInit() {
    this.setEarliestYear();
  }

  setEarliestYear(){
    let years: number[] = [];
    this.model.years.map((year) => years.push(year.year));
    this.earliestYear = new EarliestYear().transform(years);
  }

}
