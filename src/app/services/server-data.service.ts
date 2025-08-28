import { inject, Injectable } from '@angular/core';
import { ServerData } from '../core/models/server-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerDataService {
  private configUrl = 'assets/config/server-card-data.json';

  private http = inject(HttpClient);

  getServerData(): Observable<ServerData[]> {
    return this.http.get<ServerData[]>(this.configUrl);
  }
}
