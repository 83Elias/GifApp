import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitfsService } from '../services/gitfs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GitfsService) {}

  search() {
    const value = this.txtSearch.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }
    this.gifsService.searchGif(value);

    this.txtSearch.nativeElement.value = '';
  }
}
