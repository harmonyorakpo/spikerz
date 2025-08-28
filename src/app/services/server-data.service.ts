import { inject, Injectable } from '@angular/core';
import { ServerData } from '../core/models/server-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerInfo } from '../core/models/server-info';

@Injectable({
  providedIn: 'root',
})
export class ServerDataService {
  private configUrl = 'assets/config/server-card-data.json';

  private http = inject(HttpClient);

  getServerData(): Observable<ServerData[]> {
    return this.http.get<ServerData[]>(this.configUrl);
  }

  getServerInfo(): Observable<ServerInfo[]> {
    return this.http.get<ServerInfo[]>('assets/config/server-info.json');
  }
}
