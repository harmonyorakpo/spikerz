export interface NetworkNode {
  id: string;
  name: string;
  ipAddress?: string;
  iconPath: string;
  riskLevel?: 'Critical' | 'High' | 'Medium' | 'Low';

}

export interface NetworkConnection {
  from: string;
  to: string;
  arrowPath: string;
}