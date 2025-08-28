import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContentBlockData } from '../core/models/content-block';

@Injectable({
  providedIn: 'root'
})
export class ContentBlockDataService {
  private contentDataUrl = 'assets/config/content-blocks.json';
  private http = inject(HttpClient);

  getContentData(){
    return this.http.get<ContentBlockData[]>(this.contentDataUrl);
  }


}
