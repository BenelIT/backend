// src\types\financial.ts

export interface FinancialFormData {
  revenue: number;
  cogs: number;
  operatingIncome: number;
  netIncome: number;
  beginningTotalAssets: number;
  endingTotalAssets: number;
  TotalAssets: number;
  equity: number;
  currentAssets: number;
  currentLiabilities: number;
  totalLiabilities: number;
  beginningInventory: number;
  endingInventory: number;
}

export interface FinancialRatios {
  grossMargin: number;
  operatingMargin: number;
  netProfitMargin: number;
  roa: number;
  roe: number;
  currentRatio: number;
  debtToEquity: number;
  assetTurnover: number;
  inventoryTurnover: number;
}
