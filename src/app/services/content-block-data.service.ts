import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContentBlockData } from '../core/models/content-block';
import { AppConfigService } from './config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ContentBlockDataService {
  private appConfigService = inject(AppConfigService);

  private http = inject(HttpClient);

  getContentData() {
    const { BASE_URL, CONTENT_BLOCKS } = this.appConfigService.appConfig;
    return this.http.get<ContentBlockData[]>(`${BASE_URL}${CONTENT_BLOCKS}`);
  }
}
