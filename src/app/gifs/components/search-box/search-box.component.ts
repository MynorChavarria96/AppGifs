import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'gifs-search-box',
  template: `<div class="d-flex">
  <img class="" src="/assets/menu.svg" alt="Menu" width="32" height="32" (click)="hidden()">

    <div class="d-flex col-11">
      <input type="text"
   class="form-control ms-3 "
   placeholder="Buscar Gifs..."
   (keyup.enter)="searchTag()"
   #txtTagInput>
      <button class="btn btn-outline-dark ms-2" type="submit" (click)="searchTag()">Buscar</button>
</div>


  </div>

`
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService, private sidebarService: SidebarService){};

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
  this.gifsService.searchTag(newTag);
  this.tagInput.nativeElement.value='';

  }

  hidden(){
this.sidebarService.toggleSidebar();

  }
}
