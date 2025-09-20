import { Module } from '@nestjs/common';
import { RatiosService } from './ratios.service';
import { RatiosController } from './ratios.controller';

@Module({
  providers: [RatiosService],
  controllers: [RatiosController]
})
export class RatiosModule {}
