import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardController } from './award.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Award } from './model/award.entity';

@Module({
  imports: [SequelizeModule.forFeature([Award])],
  controllers: [AwardController],
  providers: [AwardService],
})
export class AwardModule {}
