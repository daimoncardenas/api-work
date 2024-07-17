import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepositsModule } from './deposits/deposits.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [DepositsModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
