import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',

})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string ='';

  public hasloader: boolean = false

  ngOnInit(): void {
    if(!this.url) throw new Error('La propiedad URL es requerida');
  }

  onLoad(){
   setTimeout(()=>{
    this.hasloader=true;
   }, 1000)

  }


}
