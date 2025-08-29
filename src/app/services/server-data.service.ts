import { inject, Injectable } from '@angular/core';
import { ServerData } from '../core/models/server-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerInfo } from '../core/models/server-info';
import { AppConfigService } from './config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ServerDataService {
  private appConfigService = inject(AppConfigService);
  private http = inject(HttpClient);

  getServerData(): Observable<ServerData[]> {
    const { BASE_URL, SERVER_CARD_DATA } = this.appConfigService.appConfig;
    return this.http.get<ServerData[]>(`${BASE_URL}${SERVER_CARD_DATA}`);
  }

  getServerInfo(): Observable<ServerInfo[]> {
    const { BASE_URL, SERVER_INFO } = this.appConfigService.appConfig;
    return this.http.get<ServerInfo[]>(`${BASE_URL}${SERVER_INFO}`);
  }
}
