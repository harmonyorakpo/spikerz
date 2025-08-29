import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusItem } from '../core/models/network-hero';
import { AppConfigService } from './config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private appConfigService = inject(AppConfigService);
  private http = inject(HttpClient);

  getNetworkStatusItems(): Observable<StatusItem[]> {
    const { BASE_URL, STATUS_ITEMS } = this.appConfigService.appConfig;
    return this.http.get<StatusItem[]>(`${BASE_URL}${STATUS_ITEMS}`);
  }
}
