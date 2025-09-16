import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatiosModule } from './ratios/ratios.module';

@Module({
  imports: [RatiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
