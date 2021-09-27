import { Component } from '@angular/core';
import { GitfsService } from '../services/gitfs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {
 
  get results(){
    return this.gitsService.responseHttpRequest;
  }

  constructor(private gitsService:GitfsService) { }



}
