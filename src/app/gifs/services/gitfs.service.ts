import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfeaces';

@Injectable({
  providedIn: 'root',
})
export class GitfsService {
  private apiKey: string = 'Yr9qmUxMT5FlGklshRa6QY5VNPQe3VSW';
  private baseUrl:string ="https://api.giphy.com/v1/gifs"; 
  private _history: string[] = [];

  public responseHttpRequest: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {

     this._history=JSON.parse(localStorage.getItem("history")!)||[];
     this.responseHttpRequest=JSON.parse(localStorage.getItem("results")!)||[];

  }

  searchGif(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem("history",JSON.stringify(this._history));
    }
       
    const params= new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',query)
    .set('limit','50');
    
    this.http
      .get<SearchGifsResponse>(`${this.baseUrl}/search`,{params})
      .subscribe((res) => {
        this.responseHttpRequest = res.data;
        localStorage.setItem("results",JSON.stringify(this.responseHttpRequest));

      });
  }
}
