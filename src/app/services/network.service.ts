import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusItem } from '../core/models/network-hero';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private statusItemsUrl = 'assets/config/network-status-items.json';

  private http = inject(HttpClient);

  getNetworkStatusItems(): Observable<StatusItem[]> {
    return this.http.get<StatusItem[]>(this.statusItemsUrl);
  }
}
