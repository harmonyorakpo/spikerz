export interface AssetRiskItem {
  id: string;
  name: string;
  ipAddress: string;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  iconPath: string;
}

export interface RiskData {
  critical: number;
  high: number;
  medium: number;
  low: number;
}
