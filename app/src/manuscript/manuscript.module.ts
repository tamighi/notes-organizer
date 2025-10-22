import { Module } from '@nestjs/common';
import { ManuscriptController } from './manuscript.controller';
import { ManuscriptService } from './manuscript.service';

@Module({
  controllers: [ManuscriptController],
  providers: [ManuscriptService]
})
export class ManuscriptModule {}
