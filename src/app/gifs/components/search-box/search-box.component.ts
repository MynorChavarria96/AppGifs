import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
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
