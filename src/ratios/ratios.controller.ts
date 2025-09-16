import { Controller, Get } from '@nestjs/common';
import { RatiosService } from './ratios.service';

@Controller('ratios')
export class RatiosController {
  constructor(private readonly ratiosService: RatiosService) {}

  @Get()
  test() {
    return { message: 'Endpoint ratios working' };
  }
}
