import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetRiskItem } from '../core/models/asset-risk';
import { RiskData } from '../core/models/risk-data';

@Injectable({
  providedIn: 'root',
})
export class AssetRiskService {
  private configUrl = 'assets/config/asset-items.json';
  private riskSummaryUrl = 'assets/config/risk-summary.json';

  private http = inject(HttpClient);

  getAssetItems(): Observable<AssetRiskItem[]> {
    return this.http.get<AssetRiskItem[]>(this.configUrl);
  }

  getRiskSummary(): Observable<RiskData> {
    return this.http.get<RiskData>(this.riskSummaryUrl);
  }
}
