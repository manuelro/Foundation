/**
 * The MakeList component
 * This component makes use of the MakePreview component to
 * display a list with all the makes
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MakePreviewComponent } from './../make-preview/make-preview.component';
import { MakeFilter } from './../make-filter.pipe';
import { MakeService } from './../make.service';

@Component({
  moduleId: module.id,
  selector: 'make-list',
  templateUrl: 'make-list.component.html',
  styleUrls: ['make-list.component.css'],
  directives: [MakePreviewComponent],
  pipes: [MakeFilter]
})

export class MakeListComponent implements OnInit {
  hasError: boolean = false;
  makes: any[] = [];
  filterValue: string = '';

  messages = {
    error: "We were unable to fetch makes from server.",
    loading: "Loading makes...",
    noResults: "Your search didn't match any result."
  }

  constructor(
    private router: Router,
    private makeService: MakeService
  ){}

  ngOnInit(){
    this.getMakes();
  }

  getFilteredMakes() : any[] {
    return new MakeFilter().transform(this.makes, this.filterValue);
  }

  getMakes(){
    this.makeService.getMakes()
      .subscribe(
        makes => this.makes = makes,
        error => {
          this.hasError = true
          console.log(<any>error)
        }
      );
  }

}
