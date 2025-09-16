import { Injectable } from '@nestjs/common';
import { CreateFinancialDataDto } from './dto/create-financial-data.dto';

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

@Injectable()
export class RatiosService {
  /**
   * Calculate key financial ratios based on provided financial data.
   * @param dto Financial data for the period
   * @returns Object containing calculated financial ratios
   */
  calculate(dto: CreateFinancialDataDto): FinancialRatios {
    // Calculate averages
    const averageTotalAssets = (dto.beginningTotalAssets + dto.endingTotalAssets) / 2;
    const averageInventory = (dto.beginningInventory + dto.endingInventory) / 2;

    return {
      // Profitability ratios
      grossMargin: ((dto.revenue - dto.cogs) / dto.revenue) * 100,
      operatingMargin: (dto.ebit / dto.revenue) * 100,
      netProfitMargin: (dto.netIncome / dto.revenue) * 100,
      roa: (dto.netIncome / dto.TotalAssets) * 100, // Return on Assets
      roe: (dto.netIncome / dto.equity) * 100,          // Return on Equity

      // Liquidity and leverage ratios
      currentRatio: dto.currentAssets / dto.currentLiabilities,
      debtToEquity: dto.totalLiabilities / dto.equity,

      // Efficiency ratios
      assetTurnover: dto.revenue / averageTotalAssets,
      inventoryTurnover: dto.cogs / averageInventory,
    };
  }
}
