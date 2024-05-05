import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actor } from './model/actor.entity';

@Module({
  imports: [SequelizeModule.forFeature([Actor])],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
