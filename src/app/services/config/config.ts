import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export interface AppConfig {
  BASE_URL: string;
  SERVER_CARD_DATA: string;
  SERVER_INFO: string;
  STATUS_ITEMS: string;
  CONTENT_BLOCKS: string;
  ASSET_ITEMS: string;
  RISK_SUMMARY: string;
}
