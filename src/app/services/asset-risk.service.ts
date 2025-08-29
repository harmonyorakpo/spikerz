import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetRiskItem } from '../core/models/asset-risk';
import { RiskData } from '../core/models/risk-data';
import { AppConfigService } from './config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class AssetRiskService {
  private appConfigService = inject(AppConfigService);

  private http = inject(HttpClient);

  getAssetItems(): Observable<AssetRiskItem[]> {
    const { BASE_URL, ASSET_ITEMS } = this.appConfigService.appConfig;
    return this.http.get<AssetRiskItem[]>(`${BASE_URL}${ASSET_ITEMS}`);
  }

  getRiskSummary(): Observable<RiskData> {
    const { BASE_URL, RISK_SUMMARY } = this.appConfigService.appConfig;
    return this.http.get<RiskData>(`${BASE_URL}${RISK_SUMMARY}`);
  }
}
