import { Component } from '@angular/core';
import { GitfsService } from 'src/app/gifs/services/gitfs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gitfsService:GitfsService) { }
      
  get history(){
    
    return this.gitfsService.history;
  } 
     
  searchByHistory(item:string){
    
    this.gitfsService.searchGif(item);
     
  }

}
