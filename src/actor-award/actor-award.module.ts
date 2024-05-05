import { Module } from '@nestjs/common';
import { ActorAwardService } from './actor-award.service';
import { ActorAwardController } from './actor-award.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ActorAward } from './model/actor-award.entity';

@Module({
  imports: [SequelizeModule.forFeature([ActorAward])],
  controllers: [ActorAwardController],
  providers: [ActorAwardService],
})
export class ActorAwardModule {}
