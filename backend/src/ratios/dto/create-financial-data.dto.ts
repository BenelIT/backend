import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO for creating financial records for a company.
 */
export class CreateFinancialDataDto {
  // Revenue and results
  @ApiProperty({ description: 'Total revenue of the company during the period.' })
  @IsNumber({}, { message: 'Revenue must be a number.' })
  revenue: number;

  @ApiProperty({ description: 'Cost of goods sold.' })
  @IsNumber({}, { message: 'COGS must be a number.' })
  cogs: number;

  @ApiProperty({ description: 'Earnings before interest and taxes.' })
  @IsNumber({}, { message: 'Operating Income must be a number.' })
  operatingIncome: number;

  @ApiProperty({ description: 'Net income.' })
  @IsNumber({}, { message: 'Net income must be a number.' })
  netIncome: number;

  // Activos y pasivos

  @ApiProperty({ description: 'Total assets at the beginning of the period.' })
  @IsNumber({}, { message: 'Beginning total assets must be a number.' })
  beginningTotalAssets: number;

  @ApiProperty({ description: 'Total assets at the end of the period.' })
  @IsNumber({}, { message: 'Ending total assets must be a number.' })
  endingTotalAssets: number;

  @ApiProperty({ description: 'Total assets of the period.' })
  @IsNumber({}, { message: 'Total assets must be a number.' })
  TotalAssets: number;

  @ApiProperty({ description: 'Equity of the company.' })
  @IsNumber({}, { message: 'Equity must be a number.' })
  equity: number;

  @ApiProperty({ description: 'Current assets.' })
  @IsNumber({}, { message: 'Current assets must be a number.' })
  currentAssets: number;

  @ApiProperty({ description: 'Current liabilities.' })
  @IsNumber({}, { message: 'Current liabilities must be a number.' })
  currentLiabilities: number;

  @ApiProperty({ description: 'Total liabilities of the company.' })
  @IsNumber({}, { message: 'Total liabilities must be a number.' })
  totalLiabilities: number;

  // Inventarios y cuentas por cobrar

  @ApiProperty({ description: 'Total beginning inventory during the period.' })
  @IsNumber({}, { message: 'Total beginning inventory must be a number.' })
  beginningInventory: number;

  @ApiProperty({ description: 'Total ending inventory for the period.' })
  @IsNumber({}, { message: 'Total ending inventory must be a number.' })
  endingInventory: number;
}
