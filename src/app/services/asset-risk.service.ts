import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetRiskItem } from '../core/models/asset-risk';

@Injectable({
  providedIn: 'root'
})
export class AssetRiskService {
  private configUrl = 'assets/config/asset-items.json';

  constructor(private http: HttpClient) {}

  getAssetItems(): Observable<AssetRiskItem[]> {
    return this.http.get<AssetRiskItem[]>(this.configUrl);
  }
}
