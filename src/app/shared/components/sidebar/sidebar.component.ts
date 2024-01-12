import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SidebarService } from '../../../gifs/services/sidebar.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
isSidebarOpen: boolean = true;

  @ViewChild('btnTag')
  public tagBtn!:ElementRef<HTMLButtonElement>;
  constructor(private gifsService: GifsService, private sidebarService: SidebarService){}
  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isSidebarOpen = state;
    });

  }

  get tags(): string[]
  {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag:string):void{
  this.gifsService.searchTag(tag);
  }
}
