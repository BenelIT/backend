import { Controller, Post, Body } from '@nestjs/common';
import { RatiosService } from './ratios.service';
import { CreateFinancialDataDto } from './dto/create-financial-data.dto';

@Controller('ratios')
export class RatiosController {
  constructor(private readonly ratiosService: RatiosService) {}

  @Post()
  calculate(@Body() dto: CreateFinancialDataDto) {
    return this.ratiosService.calculate(dto);
  }
}
